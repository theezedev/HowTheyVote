import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { CommonActions, useNavigation } from '@react-navigation/native';


const SideMenu = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={[styles.containerSideNav]} scrollEnabled={false}>
      <View style={{ flex: 0, backgroundColor: 'transparent', marginTop:'10%', marginBottom: '10%', }}>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('MainNavScreen')}>
          <Image style={styles.sideNavImg} source={require('../assets/icon.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, justifyContent: 'space-between', flexDirection:'column', backgroundColor: 'transparent', borderWidth:0, }}>
        <View>
          <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('MainNavScreen')}>
            <Text style={styles.sideNavBtnText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('VoteInfoScreen')}>
            <Text style={styles.sideNavBtnText}>Voting Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('AboutScreen')}>
            <Text style={styles.sideNavBtnText}>About</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom:'10%'}}>
          <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('ProfileScreen')}>
            <Text style={styles.sideNavBtnText}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ flex: 1, flexDirection: 'column-reverse', backgroundColor: 'transparent', paddingBottom:10, }}>
        <TouchableOpacity style={styles.sideNavBtn} onPress={handleLogout}>
          <Text style={[styles.sideNavBtnText,{color:'#a19d94'}]}>Sign out</Text>
        </TouchableOpacity>
      </View> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerSideNav: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#21bf96',
    borderRightWidth: 2,
    borderRightColor: '#1c4568',
  },
  sideNavBtn: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  sideNavBtnText: {
    fontSize: 20,
    marginBottom: 0,
    color: '#fff',
    fontWeight: 'bold',
  },
  sideNavImg: {
    height: 150,
    width: 150,
    marginBottom: 5,
  },
});

export default SideMenu;