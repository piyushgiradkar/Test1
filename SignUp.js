import { View, Text } from 'react-native'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

const SignUp = () => {
  const onPressLogin=()=>{
    {
        navigation.navigate('LogInScreen')
      }
}
  return (
    <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.text1}>Create New Account</Text>
    <View alignItems="center">
    <TextInput
    style={styles.inputStyle1}
    placeholder= "Full Name "/>
    <TextInput
    style={styles.inputStyle1}
    placeholder= "Phone Number "/>
    <TextInput
    style={styles.inputStyle1}
    placeholder= "E-mail Address "/>
    <TextInput
    style={styles.inputStyle1}
    placeholder= "Password "/>

<TouchableOpacity style={styles.button} onPress={onPressLogin}>
            <Text style={styles.text}> Sign Up </Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
    
    
  )};
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
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},

  inputStyle1:{ borderWidth: 1,
    flex: 20,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    fontFamily: "regular",
    fontSize: 15,
    width:"80%",
    borderRadius:60,
    marginBottom:15,
    marginTop:20
 },
 text1: {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: '#fc4e6e',
  marginTop: 40,
  marginLeft: 20,
  marginBottom:20
},
})

export default SignUp;