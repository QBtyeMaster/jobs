import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Styles from './ButtonStyle';
const Button = props => {

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} disabled={false}>
      <View style={[Styles.buttonContainer, { backgroundColor: props.bgColor }]}>
        {props.icon !== undefined ? (
          <>
            {props.icon}
            <Text style={[Styles.buttonTitle, { color: props.color, marginLeft: 5 }]}>
              {props.title}
            </Text>
          </>
        ) : (
          <Text style={[Styles.buttonTitle, { color: props.color }]}>
            {props.title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
