	import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import {Header2} from './components/header';
import {
	HeaderView,
	StyledBack,
	EmptyCartText,
	EmptyCartImage,
	Button, 
	StyledText
} from './components/globalstyles'
import {ww, wp} from '../responsive';









export default function Cart({navigation}){
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header2 mid={'Cart'}/>
	 		<View style={styles.content}>
	 			<EmptyCartImage source={require('../assets/sadCart.png')}/>
	 			<EmptyCartText>Your Cart is empty</EmptyCartText>
	 			<View style={styles.button}>
	 				<Button onPress={()=>navigation.navigate('Payment')}><StyledText>Shop Now</StyledText></Button>
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
	}
})


	