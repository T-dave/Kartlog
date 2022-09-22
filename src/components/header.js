	import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {ww, wp} from '../../responsive';
import {
	HeaderView,
	StyledBack,
	StyledBack3,
	BackView3
} from './globalstyles'




import styled from 'styled-components/native';


const Mid= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(18)}px;
text-align: center;

color: #0777A2;
`;








export function Header4({navigation, mid, handleBack}){
	
	 return(
	 	<HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>handleBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<BackView3><StyledBack3 source={require('../../assets/back2.png')}  resizeMode="contain"/></BackView3>
				</TouchableOpacity>
				<Mid>{mid}</Mid>
				<StyledBack source={require('../../assets/cart.png')} style={{width:ww(28), height:ww(29)}}  resizeMode="contain"/>
		</HeaderView>
		)
}



export function Header3({navigation, mid}){
	
	 return(
	 	<HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../../assets/vector1.png')} style={{width:ww(24), height:ww(24)}}  resizeMode="contain"/>
				</TouchableOpacity>
				<Mid>{mid}</Mid>
				<Icon2 name="setting" size={ww(21)} color="#067AA6" />
		</HeaderView>
		)
}

export function Header2({navigation, mid}){
	
	 return(
	 	<HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../../assets/vector1.png')} style={{width:ww(24), height:ww(24)}}  resizeMode="contain"/>
				</TouchableOpacity>
				<Mid>{mid}</Mid>
				<StyledBack source={require('../../assets/cart.png')} style={{width:ww(28), height:ww(29)}}  resizeMode="contain"/>
		</HeaderView>
		)
}




export function Header1({navigation}){
	
	 return(
	 	<HeaderView>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../../assets/back.png')}  resizeMode="contain"/>
				</TouchableOpacity>
				<View style={{width:1}}></View>
		</HeaderView>
		)
}



	