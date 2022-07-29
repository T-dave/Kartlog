import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {Header3} from './components/header';
import {ww, wp} from '../responsive';
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


const Time= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: ${ww(14)}px;
color: #000000;
`;





export default function Notification({navigation}){

	const notifications=[
	{image:require('../assets/grey.png'), type:1}, 
	{image:require('../assets/grey.png'), type:2}, 
	{image:require('../assets/grey.png'), type:3},
	{image:require('../assets/grey.png'), type:1},
	{image:require('../assets/grey.png'), type:1},
	{image:require('../assets/grey.png'), type:1},]
const [noti, setNoti]=useState('hh')
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header3 mid={'Notifications'}/>
	 		<ScrollView>
	 			{notifications.map ((item, index)=>{
	 				
	 				
	 				return(
	 					<View key={index}>
	 					{
	 						item.type==1 ?
	 						<View style={styles.noti}>
	 							<Image source={item.image} style={styles.image}/>
	 							<View style={{width:'70%'}}>
	 								<NotificationText>Iconic Fabrics added an item to Catalogue</NotificationText>
	 								<Time>1m ago</Time>
	 							</View>
	 						</View>
	 						: item.type==2 ?
	 						<View style={styles.noti}>
	 							<Image source={item.image} style={styles.image}/>
	 							<View style={{width:'70%'}}>
	 								<NotificationText>You just recieved a Gift pack from anonymous</NotificationText>
	 								<Time>2hrs ago</Time>
	 							</View>
	 							
	 						</View>
	 						:
	 						<View style={styles.noti}>
	 							<Image source={item.image} style={styles.image}/>
	 							<View style={{width:'70%'}}>
	 								<NotificationText>You just completed a payment of N20,000 to Iconic Fabrics</NotificationText>
	 								<Time>3hrs ago</Time>
	 							</View>
	 							
	 						</View>
	 					}
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
		margin:ww(10)
	},
	noti:{
		flexDirection:'row',
	alignItems:'center',
	justifyContent:'space-between'
	}
	
})


