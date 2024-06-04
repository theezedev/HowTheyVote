import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Replace this with your icon library
import MainNewsScreen from './MainNewsScreen';


const gloStyles = require('../gloStyles'); //Global Styles

// Define your tab screen components
// function HomeScreen() {
//   return (
//     /* Your Home Screen UI */
//     <View style={gloStyles.mainContainer}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function ProfileScreen() {
  return (
    /* Your Profile Screen UI */
    <View style={gloStyles.mainContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    /* Your Settings Screen UI */
    <View style={gloStyles.mainContainer}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const MainNavScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#21bf96',
          borderTopWidth: 0,
          borderRadius: 15, // Apply border radius
          marginHorizontal: 10, // Apply horizontal margin
          marginBottom: '8%',
          // alignItems:'center',
          // flexDirection:'row',
          paddingBottom: 0,
          height:60,
          justifyContent:'space-between',
          alignItems:'center',
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: -3,
              },
            },
            android: {
              elevation: 10,
            },
          }),
        },
      }}
    >
      <Tab.Screen
        name="News"
        component={MainNewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-outline" size={size} color={color}  style={{}}/> // Replace with your icon component
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="people-circle-outline" size={size} color={color} /> // Replace with your icon component
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="checkmark-done-circle-outline" size={size} color={color} /> // Replace with your icon component
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavScreen;
