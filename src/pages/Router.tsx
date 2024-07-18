import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Settings from './Settings/Settings';
import Login from './Login/Login';
import useAuthStore from '../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  const userSession = useAuthStore(state => state.singinUser);
  const authLoading = useAuthStore(state => state.authLoading);
  const setAuthLoading = useAuthStore(state => state.setLoading);


  useEffect(() => {
    const checkSession = async () => {
      try {
        const isAuth = await AsyncStorage.getItem('@user');
        const username = await AsyncStorage.getItem('@username');
        if (isAuth !== null) {
          useAuthStore.getState().singin(isAuth);
          useAuthStore.getState().setUsername(username);
        }
        setAuthLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    checkSession();
  }, []);

  return (
    <NavigationContainer>
      {authLoading ? (
        <Loading />
      ) : userSession === null ? (
        <Stack.Navigator initialRouteName="login_page">
          <Stack.Screen
            name="login_page"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          initialRouteName="home_page"
          screenOptions={{
            headerShown: false,
            drawerLabelStyle:{marginLeft: -25},
            drawerActiveTintColor: '#ffffff',
            drawerActiveBackgroundColor: '#F2421B',
            drawerInactiveTintColor: '#0D0D0D',
            drawerStyle: {
              backgroundColor: '#F0F1F2',
            },
          }}>
          <Drawer.Screen
            name="home_page"
            component={Home}
            options={{
              drawerIcon: (p) => (<Icon name="home-outline" size={22} color={p.color}/>),
              title: 'Worker Home Page',
              headerStyle: {
                backgroundColor: '#F0F1F2',
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTintColor: '#F25244',
              
            }}
          />
          <Drawer.Screen
            name="favorite-jobs"
            component={Favorite}
            options={{
              drawerIcon:  (p) => (<Icon name="heart-multiple-outline" size={22} color={p.color}/>),
              title: 'My Favorite Jobs',
              headerStyle: {
                backgroundColor: '#F0F1F2',
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTintColor: '#F25244',
            }}
          />
          <Drawer.Screen
            name="settings_page"
            component={Settings}
            options={{
              drawerIcon:  (p) => (<Icon name="cog-outline" size={22} color={p.color}/>),
              title: 'Settings',
              headerStyle: {
                backgroundColor: '#F0F1F2',
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTintColor: '#F25244',
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Router;

// #0E1B26 #1D2F40 #496373 #7292A6 #D7D9D9
