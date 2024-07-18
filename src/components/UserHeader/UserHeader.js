import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './UserHeaderStyle';
import useAuthStore from '../../store/useAuthStore';

const UserHeader = ({navigation}) => {
  const username = useAuthStore(state => state.username);
  return (
    <View style={Styles.headerContainer}>
      <View>
        <Text style={Styles.headerUserName}>{username}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={Styles.avatar}
          source={require('../../../assets/images/avatar.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserHeader;
