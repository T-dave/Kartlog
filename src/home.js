import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import {status} from './list';
import {ww, wp} from '../responsive';

const Button= styled.TouchableOpacity`
box-sizing: border-box;
height: ${ww(54)}px;
width: ${ww(222)}px;
border: 3px solid #FFFFFF;
border-radius: 20px;
align-items: center;
justify-content: center;
`;

const Kartlog= styled.Image`
  
width: ${ww(54)}px;
height: ${ww(58.14)}px;
`;

const StyledText= styled.Text`
  
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(14)}px;
text-transform: uppercase;

color: #FFFFFF;
`;

const KartlogText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(53.696)}px;
text-align: center;

color: #FFFFFF;
`;



export default function HomeScreen({navigation}){
	return (
    <View style={{flex:1, backgroundColor:"#0777A199"}}>
          <View style={styles.container}>   
                  <View style={styles.kartlog}><Kartlog source={require('../assets/kartlogWhite.png')}/><KartlogText>Kartlog</KartlogText></View>
                  <Button onPress={()=>navigation.navigate('First')}><StyledText>GET STARTED</StyledText></Button>
          </View>
     </View>             
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top:'55%'
  },
  kartlog:{
    marginBottom:ww(30),
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    alignItems:'center',
  },
  button:{
  	borderRadius:20,
  	borderColor:'white',
  	borderWidth:3,
    width:ww(170),
    height:ww(35),
    alignItems:'center',
    justifyContent:'center'

  },
  buttonText:{
  	fontSize:ww(14),
  	fontWeight:'900',
    color:'white',
    fontFamily:'Lato',
    alignItems:'center',
    justifyContent:'center'
  },
  kartlogText:{
  	fontSize:ww(53),
  	fontWeight:'700',
    color:'white',
    fontFamily:'Poppins'
  }
});