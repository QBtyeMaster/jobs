import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return(
    <View style={styles.container}>
      <LottieView 
        source={require('../../../assets/LottieJSON/loading.json')}
        autoPlay
        style={styles.lottie} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F2',
  },
  lottie: {
    marginTop: -80,
    width: 200,
    height: 200,
  }
})
export default Loading;