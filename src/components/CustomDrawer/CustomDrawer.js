import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAuthStore from '../../store/useAuthStore';
import Styles from './CustomDrawerStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const setSessionLogout = useAuthStore(state => state.logout);
  const username = useAuthStore(state => state.username);

  const handleSingOut = () => {
    setSessionLogout();
  };
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#F2421B'}}>
        <ImageBackground
          style={Styles.drawerTopBg}
          source={require('../../../assets/images/drawer.png')}>
          <View>
            <Image
              style={Styles.avatar}
              source={require('../../../assets/images/avatar.jpg')}
            />
            <View>
              <Text style={Styles.username}>{username}</Text>
              <View style={Styles.userInfoBottom}>
                <Text style={Styles.userPoints}>1006 Points</Text>
                <Icon style={Styles.drawerTopIcon} name="database-outline" size={18} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{flex: 1, paddingTop: 10, backgroundColor: '#F0F1F2'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 0.5,
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity style={{marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="share-variant-outline"
              size={24}
              style={{marginRight: 5}}
            />
            <Text style={{color: '#0D0D0D'}}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginVertical: 10}} onPress={handleSingOut}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="logout"
              size={24}
              style={{marginRight: 5, color: '#0D0D0D'}}
            />
            <Text style={{color: '#0D0D0D'}}>Sing Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
