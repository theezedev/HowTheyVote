import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';


const gloStyles = require('../gloStyles'); //Global Styles


const AboutScreen = () => {
  const [userInfo, setUserInfo] = useState({});

  // Function to update userInfo in AsyncStorage
  const updateUserInfo = async () => {
    try {
      // Get the current userInfo data from AsyncStorage
      const userInfoString = await AsyncStorage.getItem('userInfo');
      const currentUserInfo = JSON.parse(userInfoString || '{}');

      // Update the userInfo object (for example, setting the PARTY and ADDRESS)
      const updatedUserInfo = {
        ...currentUserInfo,
        PARTY: 'Some Party',
        ADDRESS: '123 Main St',
      };

      // Save the updated userInfo object back to AsyncStorage
      await AsyncStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

      // Update the local state with the updated userInfo
      setUserInfo(updatedUserInfo);
    } catch (error) {
      console.error('Error updating userInfo:', error);
    }
  };

  // Load userInfo from AsyncStorage on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        const storedUserInfo = JSON.parse(userInfoString || '{}');
        setUserInfo(storedUserInfo);
      } catch (error) {
        console.error('Error fetching userInfo:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <View style={[gloStyles.mainContainer,]}>
      <ScrollView style={{flex:1, borderWidth:1,marginBottom:10,}}>
        <Text>About this app.</Text>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;
