import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './JobCardStyle';

const jobCard = ({job, navigation}) => {
  const handleJobClick = () => {
    navigation.navigate("JobDetail", job)
  }

  const location = job.locations.length == 0 ? "Remote" : job.locations[0].name;
  return (
    <TouchableWithoutFeedback onPress={handleJobClick}>
      <View style={style.container}>
        <View style={style.jobHeaderContainer}>
          <Text style={style.jobHeader}>{job.name}</Text>
          <Text style={style.jobCompany}>{job.company.name}</Text>
        </View>
        <View style={style.jobFooterContainer}>
          <View style={style.jobLocations}>
            <Icon style={{marginLeft:-5, color:"#ffffff" }} name="map-marker-outline" size={20} />
            <Text style={style.jobLocationText}>{location}</Text>
          </View>
          <View>
            <Text style={style.jobLevelText}>{job.levels[0].name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default jobCard;
