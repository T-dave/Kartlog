import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {Header4} from './components/header';
import {ww, wp} from '../responsive';
import {
	MessageImage,
	MessageTime,
	MessageView1,
	MessageViewText1,
	MessageView2,
	MessageViewText2,
	MessageInput,
	MessageInputIcon,
	MessageMicView,
	MessageMic,
	MessageBrand,
} from './components/globalstyles'



export default function Message2({navigation}){
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header4 mid={'Messages'} handleBack={()=>navigation.goBack()}/>
	 		<ScrollView style={{padding:ww(10)}} showsVerticalScrollIndicator={false}>
	 			<View style={{alignItems:'center', justifyContent:'center', width:'100%', marginBottom:ww(15)}}>
	 				<MessageBrand>Drells Nigeria</MessageBrand>
	 			</View>
	 			<View>
		 			<MessageTime>05:21pm</MessageTime>
		 			<MessageImage source={require('../assets/lady.png')} style={styles.left} resizeMode="contain"/>
		 			<MessageView1>
		 				<MessageViewText1>Vintage Native Short sleeve, Blue</MessageViewText1>
		 			</MessageView1>
	 			</View>

	 			<View style={styles.message2}>
		 			<MessageTime>05:21pm</MessageTime>
		 			<MessageView2>
		 				<MessageViewText2>Good Day, we are pleased to have recieved your order. Please do let us know of any modification you want on your order. Feel free to look around our store for more.</MessageViewText2>
		 			</MessageView2>
	 			</View>

	 			<View>
		 			<MessageTime style={{marginLeft:5}}>05:21pm</MessageTime>
		 			<MessageView1>
		 				<MessageViewText1>I prefer a longer sleeve. I prefer an all white </MessageViewText1>
		 			</MessageView1>
	 			</View>



	 		</ScrollView>
	 		<View style={styles.bottom}>
	 			<MessageInput>
	 				<TextInput style={{width:'83%', minHeight:ww(46), margin:4, maxHeight:500}} placeHolder="Text here..." multiline/>
	 				<MessageInputIcon source={require('../assets/messageInputIcon.png')} resizeMode="contain"/>
	 			</MessageInput>
	 			<MessageMicView>
	 				<MessageMic source={require('../assets/messageMic.png')} resizeMode="contain"/>
	 			</MessageMicView>
	 			<MessageMicView>
	 				<MessageMic source={require('../assets/messagePic.png')} resizeMode="contain"/>
	 			</MessageMicView>
	 		</View>
	 	</SafeAreaView>	
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		paddingTop:25
		
		
	},
	left:{
		borderRadius:ww(25.1064),
	},
	message2:{
		alignItems:'flex-end'
	},
	bottom:{
		margin:ww(12),
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	}
	
})


