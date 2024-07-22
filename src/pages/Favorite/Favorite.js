import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import useJobsStore from '../../store/useJobsStore';
import Styles from './FavoriteStyle';
import UserHeader from '../../components/UserHeader';
import JobCard from '../../components/JopCard';

const Favorite = ({navigation}) => {

  const jobs = useJobsStore(state => state.favoriteJobs);
  const jobRender = ({item}) => {
    return <JobCard job={item} navigation={navigation} />;
  };

  

  return (
    <SafeAreaView>
      <UserHeader navigation={navigation} />
      <FlatList
        style={{marginHorizontal: 10}}
        data={jobs}
        renderItem={jobRender}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Favorite;
