import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { gloSettings } from '../gloSettings'; //Global App Settings


const gloStyles = require('../gloStyles'); //Global Styles

const MainNewsScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchData = async () => {
    try {
      console.log(gloSettings);
      let fetchurl = 'https://www.googleapis.com/civicinfo/v2/elections?key='+gloSettings.GOOGLECIVICAPIKEY
      console.log(fetchurl);
      const response = await fetch(fetchurl);
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
      } else {
        console.error('Request failed with status:', response.status);
        console.error(response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  
 
  return (
    <View style={[gloStyles.mainContainer,]}>
      <View>
      <SegmentedControl
        values={['National', 'State', 'Local']}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex({selectedIndex: event.Text});
        }}
      />
      </View>
      <ScrollView style={{flex:1, borderWidth:1,marginBottom:10,}}>
        <Text>Main News</Text>
      </ScrollView>
    </View>
  );
};

export default MainNewsScreen;
