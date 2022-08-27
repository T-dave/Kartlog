import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {Header2} from './components/header';
import {ww, wp} from '../responsive';
import {
	MessageImage,
	MessageTime
} from './components/globalstyles'



export default function Message2({navigation}){
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header2 mid={'Messages'}/>
	 		<ScrollView>
	 			<MessageTime>05:21pm</MessageTime>
	 			<MessageImage source={require('../assets/lady.png')} style={styles.left} resizeMode="contain"/>
	 		</ScrollView>
	 	</SafeAreaView>	
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		
		
	},
	left:{
		borderTopRightRadius:ww(25.1064),
		borderBottomRightRadius:ww(25.1064),
		borderBottomLeftRadius:ww(25.1064),
	}
	
})


