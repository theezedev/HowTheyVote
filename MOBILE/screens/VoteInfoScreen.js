import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const gloStyles = require('../gloStyles'); //Global Styles


const HowToVoteScreen = () => {
  return (
    <View style={[gloStyles.mainContainer]}>
      <Text>How to Vote</Text>
    </View>
  );
};

const Screen1 = () => {
  return (
    <View style={[gloStyles.mainContainer]}>
      <Text>Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={[gloStyles.mainContainer]}>
      <Text>Screen 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={[gloStyles.mainContainer]}>
      <Text>Screen 3</Text>
    </View>
  );
};

const VoteInfoScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HowToVote" component={HowToVoteScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default VoteInfoScreen;
