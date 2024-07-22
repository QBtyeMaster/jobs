import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useJobsStore from '../../store/useJobsStore';
import Loading from '../../components/loading/Loading';

const JobDetail = ({route}) => {

  const favoriteJobs = useJobsStore(state=> state.favoriteJobs);
  const addFavoriteJob = useJobsStore(state=> state.addFavoriteJob);
  const removeFavoriteJob = useJobsStore(state => state.removeFavoriteJob)
  const {id: jobID, name, company, locations, levels, contents} = route.params;
  const isFavorite = favoriteJobs.some(job => job.id === jobID);

  const htmlContents = `
  <style>
  div.container {background-color: #F0F1F2; padding: 0 40px}
  div.container * {font-size:50px;}
  </style>
  <div class="container">${contents}</div>`;

  const addFavorite = () => {
    const haveJob = favoriteJobs.some(item => item.id === jobID)
    if(!haveJob){
      addFavoriteJob({
        id: jobID,
        name: name,
        company: company,
        locations: locations,
        levels: levels,
        contents: contents
      });
    }
    Alert.alert("Awesome!!!","The job has been added to your favorite list.")
  }
  
  const removeFavorite = () => {
    const haveJob = favoriteJobs.some(item => item.id === jobID)
    if(haveJob){
      removeFavoriteJob(jobID);
      Alert.alert("System Message:","The job has been removed to your favorite list.")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <WebView
          originWhitelist={['*']}
          source={{html: htmlContents}}
          style={{flex: 1, backgroundColor: '#F0F1F2', borderWidth: 0}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
      <Button
          title="Submit"
          icon={<Icon name="login" size={20} color="#FFFFFF" />}
          bgColor="#F2421B"
          color="#FFFFFF"
          onPress={null}
          />
       
        <Button
          title={!isFavorite?"Add Favorite":"Remove Favorite"}
          icon={<Icon name={!isFavorite?"heart-multiple-outline":"heart-remove-outline"} size={20} color="#FFFFFF" />}
          bgColor="#F2421B"
          color="#FFFFFF"
          onPress={!isFavorite?addFavorite:removeFavorite}
          />
      </View>
    </SafeAreaView>
  );


  

};

export default JobDetail;
