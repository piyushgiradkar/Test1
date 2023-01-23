import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, handleChangeName } from 'react-native'

import React, { useState } from "react"

import {
    SafeAreaView,
    ScrollView,
  } from 'react-native';

const HomeScreen = ({navigation}) => {
    const [Names, setNames] = useState("");
    const [Insert, setInsert]= useState("");

const handleChangeName =(text) => { 
   
    setInsert(text);
    console.log(Insert);
}

const submitNames = ()=>{
     setNames([...Names, Insert]);
     console.log(Names);
     setInsert("");

}
const deleteNames = ()=>{
    setNames("");
    console.log(Names);
    setInsert("");

}


  return (
    <View style={styles.home }>
       <SafeAreaView>
        <ScrollView
          >
          <View>
            <Text style={styles.sectionTitle } > Welcome to Home Screen</Text>
          </View>
          <View style={styles.labels}>
            <Text style={styles.sectionDescription}  > Enter your name </Text>
          </View>
          <TextInput
          style={styles.inputStyle}
          placeholder= "name "
          onChangeText={(text) => handleChangeName(text)}
          values={Insert}
          />
          
          </ScrollView>
           </SafeAreaView>
           <View >
             <Text style={styles.highlight } > 
                 |<Button title="Insert" onPress={submitNames}/>|
                 |<Button title="Delete" onPress={deleteNames} />|
                 </Text>
                 </View>
                 <Text style={styles.sectionContainer }>All Names</Text>
      {/* <TouchableOpacity  onPress={() => navigation.navigate('Secondpage')} > */}
        {/* <Text>Next Screen</Text> */}
      {/* </TouchableOpacity> */}
      {Names && Names.map((Names) => { 
        return <Text>{Names}</Text>;
      })}
       {/* <Text style={styles.sectionContainer}>{Names}</Text> */}
    </View>
    
  )
  }

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      fontSize: 30,
        marginTop: 8,
        color: 'black',
        textAlign:'center',
        fontWeight: 'bold',
        textAlign:'center',
    },
    button: {
        alignItems: 'center',
        flex: 20,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 30,

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
    sectionTitle: {
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
      fontWeight: 'bold',
      fontSize: 30,
      fontWeight: '700',
      color: 'black',
    },
    labels: { fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25, 
        fontFamily: "regular",
     },
     inputStyle:{ borderWidth: 1,
        
        borderColor: "black",
        backgroundColor:'white',
        fontFamily: "regular",
        fontSize: 18,
        marginBottom: 20,
        width:200,
        marginLeft:100,
        textAlign:'center',
     },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      fontWeight: 'bold',
      textAlign:'center',
    },
    highlight: {
      textAlign:'center',
      marginLeft:-10,
      
    },
    home: {
        backgroundColor:'yellow',
        
      }
  });
export default HomeScreen