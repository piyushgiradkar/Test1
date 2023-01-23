import { View, Text, Alert } from 'react-native'
import React,{useState} from 'react'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

const LogInScreen = ({navigation}) => {
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState('');
 const onPressLogin=()=>{
if (email=="")
 {
  Alert.alert('Email is required');
  
} else if(password=="") {
  Alert.alert('Password is required')
  
}
    if (email !="" && password!="" ) {
      navigation.navigate('HomeScreen')
    }
 }
    return (
    <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={styles.sectionTitle}>Sign In</Text>
          </View>
          <View  style={styles.labels}>
            {/* <Text style={styles.sectionDescription} > Enter your Username </Text> */}
          </View>
          <View alignItems="center">
          <TextInput
          style={styles.inputStyle1}
          placeholder= "Email Or Mobile No. "
          onChangeText= {(text)=>setEmail(text)}
          value={email}
          />
          <View style={styles.labels}>
            {/* <Text style={styles.sectionDescription} > Enter your password </Text> */}
          </View>
  
          <TextInput
          style={styles.inputStyle2}
          placeholder= "Password"
          secureTextEntry={true}
          onChangeText={(text)=>setPassword(text)}
          value={password}
          />
         
          
          <TouchableOpacity style={styles.button} onPress={onPressLogin} >
            <Text style={styles.text}> Log In </Text>
            </TouchableOpacity>
            
            <Text style={styles.text1}> OR</Text>

            
          <TouchableOpacity style={styles.button1} onPress={onPressLogin} >
            <Text style={styles.text}> Log With Facebook </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
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
        backgroundColor: '#3a38c7',
        marginTop: 40,
        width:"70%",
        // marginLeft: 47,
        borderRadius:60,

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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginTop: 40,
        // marginBottom: 20,
    },
    sectionTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      fontWeight: 'bold',
      fontSize: 30,
      fontWeight: '700',
      color: '#fc4e6e',
      marginLeft:15,
    },
    labels: { fontSize: 18,
        
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25, 
        fontFamily: "regular",
        marginLeft:35,
        fontWeight: 'bold',
        
     },
     inputStyle1:{ borderWidth: 1,
        flex: 20,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        fontFamily: "regular",
        fontSize: 18,
        width:"80%",
        borderRadius:60,
        marginBottom:15
     },
     inputStyle2:{ borderWidth: 1,
        flex: 20,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        fontFamily: "regular",
        fontSize: 18,
        width:"80%",
        borderRadius:60,
        marginBottom:15
     },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      fontWeight: 'bold',
      marginLeft:20
      
    },
    highlight: {
      fontWeight: '700',
    },
  });
export default LogInScreen