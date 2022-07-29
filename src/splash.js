import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import svg, {rect, path, circle} from 'react-native-svg';
import styled from 'styled-components/native';
import {ww, wp} from '../responsive';


const Kartlog= styled.Image`
  
width: ${ww(54)}px;
height: ${ww(58.14)}px;
`;



export default function SplashScreen({navigation}){
  setTimeout(()=>{
    navigation.navigate('Home')
  }, 3000)
	return (
    <View style={{flex:1, backgroundColor:"#0777A199"}}>
    <View style={styles.container}>
     
 <View style={styles.kartlog}><Kartlog source={require('../assets/kartlogWhite.png')}/>
<Text style={styles.kartlogText}>kartlog</Text></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top:'45%',
    backgroundColor:"rgba(0,0,0,0)"
  },
  kartlog:{
    marginBottom:ww(50),
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    alignItems:'center',
  },
  kartlogText:{
  	fontSize:ww(53),
  	fontWeight:'700',
    color:'white',
    fontFamily:'Poppins',
    
  }
});