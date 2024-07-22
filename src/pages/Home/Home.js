import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ActivityIndicator, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Styles from './HomeStyle';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading';
import JobCard from '../../components/JopCard';
import useAuthStore from '../../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserHeader from '../../components/UserHeader';

const Home = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const {data, loading, error} = useFetch(
    `https://www.themuse.com/api/public/jobs?page=${page}`
  );

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    if (data && !loading) {
      setJobs(prevData => [...prevData, ...data.results]);
    }
  }, [data, loading]);

  const jobRender = ({item}) => {
    return <JobCard job={item} navigation={navigation} />;
  };

  if (loading && page === 1) {
    return <Loading />;
  }

  if (error) {
    return (
      <SafeAreaView style={Styles.container}>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={Styles.container}>
      <UserHeader navigation={navigation} />
      <FlatList
        style={{marginHorizontal: 10}}
        data={jobs}
        renderItem={jobRender}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore} // Sayfa sonuna gelindiğinde sayfayı artır
        onEndReachedThreshold={0.5} // Sayfanın %50'si kadar kaydırıldığında sayfayı artır
        ListFooterComponent={loading && <ActivityIndicator size={'small'} color={"#F2B705"} />} // Sayfa sonuna gelindiğinde loading göster
      />
    </SafeAreaView>
  );
};

export default Home;
