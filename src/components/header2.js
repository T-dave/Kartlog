	import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ww, wp} from '../../responsive';
import {
	HeaderView,
	StyledBack
} from './globalstyles'
import styled from 'styled-components/native';


const Mid= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(18)}px;
color: #000000;
`;








export default function Header2({navigation, mid}){
	
	 return(
	 	<HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../../assets/vector1.png')} style={{width:ww(24), height:ww(24)}}/>
				</TouchableOpacity>
				<Mid>{mid}</Mid>
				<Icon name="shopping-cart" size={ww(22)} color="#067AA6" />
		</HeaderView>
		)
}



	