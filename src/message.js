import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {Header2} from './components/header';
import {
	HeaderView,
	StyledBack,
	OhSnapText,
	OhSnapText2,
	EmptyCartImage,
	Button2, 
	StyledText2,
	BackText,
	Atm,
	Mc,
	Mc2,
	CardNum,
	CardNum1,
	CardNum2,
	InputTopText,
	Button3,
	ButtonText3,
	NotificationText
} from './components/globalstyles'
import {ww, wp} from '../responsive';

const Time= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: ${ww(14)}px;
color: #000000;
`;





export default function Message({navigation}){

	const notifications=[
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, 
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, 
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, 
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, 
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, 
	{image:require('../assets/grey.png'), sender:'Imade Fash', message:'I need four of that'}, ]
const [noti, setNoti]=useState('hh')
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header2 mid={'Messages'}/>
	 		<ScrollView style={{margin:ww(10)}} showsVerticalScrollIndicator={false}>
	 			{notifications.map ((item, index)=>{
	 				
	 				
	 				return(
	 					<View key={index}>
	 					
	 						<View style={styles.noti}>
	 								<View style={styles.tt}>
	 								<Image source={item.image} style={styles.image}/>
	 								<View>
	 									<NotificationText>{item.sender}</NotificationText>
	 									<NotificationText>{item.message}</NotificationText>
	 								</View>
	 								</View>
	 							<Time>1min ago</Time>
	 						</View>
	 					</View>	
	 					)
	 			})}
	 		</ScrollView>
	 	</SafeAreaView>	
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		
		
	},
	image:{
		width:ww(60),
		height:ww(60),
		marginRight:ww(20),
	},
	noti:{
		flexDirection:'row',
	alignItems:'center',
	justifyContent:'space-between',
	margin:ww(20)
	},
	tt:{
		flexDirection:'row',
		alignItems:'center',
	}
	
})




