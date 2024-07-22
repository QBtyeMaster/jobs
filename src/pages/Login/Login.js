import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Style from './LoginStyle';
import usePost from '../../hooks/usePost';
import {Formik} from 'formik';
import useAuthStore from '../../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const {data: loginData, error, loading, postFetch} = usePost();
  const userUpdate = useAuthStore(state => state.singin);
  const usernameUpdate = useAuthStore(state => state.setUsername);
  const username = useAuthStore(state => state.username);

  const handleRegister = async values => {
    if (values.username !== '' && values.password !== '') {
      usernameUpdate(values.username);
      postFetch('https://fakestoreapi.com/auth/login', values);
    }
  };

  useEffect(() => {
    const updateUserloginData = async () => {
      if (loginData) {
        try {
          await AsyncStorage.setItem('@user', JSON.stringify(loginData.token));
          await AsyncStorage.setItem('@username', username);
          userUpdate(JSON.stringify(loginData.token));

        } catch (err) {
          console.error('AsyncStorage Error:', err);
        }
      }
    };
    updateUserloginData();
  }, [loginData]);

  return (
    <SafeAreaView style={Style.safeContainer}>
      <View style={Style.appLogoWrapper}>
        <Image
          style={Style.logoImage}
          source={require('../../../assets/images/worker.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleRegister}>
        {({handleChange, handleBlur, handleSubmit, values}) => {
          return (
            <View style={Style.appLoginFormWrapper}>
              <View>
                <TextInput
                  onChangeText={handleChange('username')}
                  style={Style.input}
                  placeholder="Username..."
                  placeholderTextColor={'#a5a5a5'}
                  autoCapitalize="none"
                  value={values.username}
                />
              </View>
              <View>
                <TextInput
                  onChangeText={handleChange('password')}
                  style={Style.input}
                  placeholder="Password..."
                  placeholderTextColor={'#a5a5a5'}
                  autoCapitalize="none"
                  secureTextEntry="true"
                  value={values.password}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={Style.loginFormSubmit}
                  onPress={handleSubmit}
                  disabled={!loading}
                  activeOpacity={0.8}
                  >
                    {loading?(
                      <Text style={Style.loginFormSubmitText}>Singin</Text>
                    ):(
                    <ActivityIndicator size="small" color="#0E1B26" />
                    )}

                  
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

// username:'johnd' password:'m38rmF$'