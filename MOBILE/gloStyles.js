'use strict';
import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
    mainContainer:{
        flex:1 ,
        paddingBottom:'8%',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:'8%',
    },
    btnPrimary:{
        backgroundColor:'#1c4568',
        color:'#fff',
        padding:10,
        justifyContent:'center',
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
              borderRadius: '5%',
            },
            android: {
              borderRadius: 10,
              elevation: 10,
            },
          }),

    },
    txtWhite:{
        color:'#fff',
    },
    backgroundImage:{
        flex: 1,
        justifyContent: 'center',
    },

    gloShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 15,
        style: { marginVertical: 5 }
    },
    selectedButton:{
        backgroundColor:'#43464b',
    },

});
