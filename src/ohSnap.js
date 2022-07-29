	import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from './components/header';
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
} from './components/globalstyles';









export default function OhSnap({navigation}){
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header2 mid={'Payment'}/>
	 		<View style={styles.content}>
	 			<EmptyCartImage source={require('../assets/ohSnap.png')}/>
	 			<OhSnapText>Oh Snap! Order Failed</OhSnapText>
	 			<OhSnapText2 style={{width:ww(332)}}>Looks like something went wrong while processing your request.</OhSnapText2>
	 			
	 			<View style={styles.button}>
	 				<Button2 onPress={()=>navigation.navigate('Cart')}><StyledText2>Please try again</StyledText2></Button2>
	 				<View style={styles.row}><Icon name="arrowleft" size={ww(16)} color="black" /><BackText>Back to home</BackText></View>
	 			</View>
	 		</View>
	 		
	 	</SafeAreaView>	
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		
	},
	content:{
		alignItems:'center',
		justifyContent:'center',
		marginTop:'20%'
	},
	button:{
		margin:ww(20)
	},
	row:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	}
})


	