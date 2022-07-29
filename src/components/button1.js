import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {ww, wp} from '../../responsive';


const Button= styled.TouchableOpacity`
background-color:  #066D95;
color: #FFFFFF;
border-radius: 20px;
height: ${ww(60)}px;
width: ${ww(332)}px;
border-radius: 20px;
flex-direction:row;
justify-content:center;
align-items:center;
margin:10px 0 ${ww(10)}px 0;

`;

const StyledText= styled.Text`
  

font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(18)}px;
text-transform: uppercase;

color: #FFFFFF;
`;


export default function Button1(){
    return (
    <Button><StyledText>GET STARTED</StyledText></Button>
  );
}
