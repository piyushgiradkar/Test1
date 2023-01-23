import { View, Text, Alert } from 'react-native'
import React,{useState} from 'react'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

const FirstScreen = ({navigation}) => {
     const onPressLogin=()=>{
        {
            navigation.navigate('LogInScreen')
          }
 }
     const onPressLogin1=()=>{
        {
            navigation.navigate('SignUp')
          }
 }
  
    return (
    <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View alignItems="center">
          <Text style={styles.text1}> Say hello to your new app</Text>
          <TouchableOpacity style={styles.button} onPress={onPressLogin} >
            <Text style={styles.text}> Log In </Text>
            </TouchableOpacity>
            
            

            
          <TouchableOpacity style={styles.button1} onPress={onPressLogin1} >
            <Text style={styles.text2}> Sign Up </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        // elevation: 3,
        backgroundColor: '#fc4e6e',
        marginTop: 20,
        width:"70%",
        // marginLeft: 47,
        borderRadius:60,

      },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        // elevation: 3,
        backgroundColor: '#fff',
        marginTop: 20,
        width:"70%",
        // marginLeft: 47,
        borderRadius:60,
        borderColor:'#fc4e6e',
        borderWidth:1

      },
      text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
      text1: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",
        fontSize:30,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fc4e6e',
        marginTop: 100,
        width:"80%"
        // marginBottom: 20,
    },
    text2: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fc4e6e',
    },
    
    
  });
export default FirstScreen