import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import MainNavScreen from './screens/MainNavScreen';
import SideMenu from './components/SideMenu';
import ProfileScreen from './screens/ProfileScreen';
import VoteInfoScreen from './screens/VoteInfoScreen';
import AboutScreen from './screens/AboutScreen';
import { defaultUserInfo } from './defaultUserInfo'; //Default userInfoJSON


const Drawer = createDrawerNavigator();
// const defaultUserInfo = require('./defaultUserInfo'); 


export default function App() {

  useEffect(() => {
    const checkUserInfo = async () => {
      try {
        // Check if the userInfo object exists in AsyncStorage
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (!userInfoString) {
          // const initialUserInfo = { PARTY: '', ADDRESS: '' };
          await AsyncStorage.setItem('userInfo', JSON.stringify(defaultUserInfo));
          // await AsyncStorage.setItem('userInfo', defaultUserInfo);

          // console.log('userInfo object added with blank data.');
        } else {
          // console.log('userInfo object already exists in AsyncStorage.');
          // console.log(userInfoString);
        }
      } catch (error) {
        console.error('Error checking userInfo:', error);
      }
    };

    checkUserInfo();
  }, []);

  // const deleteUserInfo = async () => {
  //   try {
  //     await AsyncStorage.removeItem('userInfo');
  //     console.log('userInfo deleted successfully.');
  //   } catch (error) {
  //     console.error('Error deleting userInfo:', error);
  //   }
  // };

  // deleteUserInfo();

  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen
          name="MainNavScreen"
          component={MainNavScreen}
          options={({ navigation }) => ({
            title: 'HowTheyVote',
            headerStyle: {
              backgroundColor: '#21bf96',
              borderBottomWidth: 3,
              borderBottomColor: '#1c4568',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerRight: () => (
            //   <Icon
            //     name="sync" 
            //     size={24}
            //     color="white"
            //     style={{ marginRight: 16 }}
            //     onPress={handleSync}
            //   />
            // ),
          })}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#21bf96',
              borderBottomWidth: 3,
              borderBottomColor: '#1c4568',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerRight: () => (
            //   <Icon
            //     name="sync" 
            //     size={24}
            //     color="white"
            //     style={{ marginRight: 16 }}
            //     onPress={handleSync}
            //   />
            // ),
          })}
        />
        <Drawer.Screen
          name="VoteInfoScreen"
          component={VoteInfoScreen}
          options={({ navigation }) => ({
            title: 'Voting Information',
            headerStyle: {
              backgroundColor: '#21bf96',
              borderBottomWidth: 3,
              borderBottomColor: '#1c4568',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerRight: () => (
            //   <Icon
            //     name="sync" 
            //     size={24}
            //     color="white"
            //     style={{ marginRight: 16 }}
            //     onPress={handleSync}
            //   />
            // ),
          })}
        />
        <Drawer.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={({ navigation }) => ({
            title: 'About This App',
            headerStyle: {
              backgroundColor: '#21bf96',
              borderBottomWidth: 3,
              borderBottomColor: '#1c4568',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerRight: () => (
            //   <Icon
            //     name="sync" 
            //     size={24}
            //     color="white"
            //     style={{ marginRight: 16 }}
            //     onPress={handleSync}
            //   />
            // ),
          })}
        />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
