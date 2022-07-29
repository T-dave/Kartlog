import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {Header2} from './components/header';
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
	ButtonText3
} from './components/globalstyles';



const Photo= styled.Image`
width: ${ww(34)}px;
height: ${ww(29)}px;
`;

const StyledTextInput= styled.TextInput`
height: ${ww(50)}px;
background: #FFFFFF;
border: 1px solid #D2D2D2;
border-radius: 10px;
`;


const StyledTextInput1= styled.TextInput`
height: 100%;
width:100%;

`;


const StyledTextInput2= styled.View`
height: ${ww(50)}px;
background: #FFFFFF;
border: 1px solid #D2D2D2;
border-radius: 10px;
flex-direction:row;
align-items:center;

`;





export default function Payment({navigation}){
	
	 return(
	 	<SafeAreaView style={styles.container}>
	 		<Header2 mid={'Payment'}/>
	 		<View style={{alignItems:'center'}}>
	 		<View style={{borderRadius: 15, width: '95%', alignItems:'center'}}>
		 		<Atm source={require('../assets/cardBackground.png')}>

					<View style={{alignItems:'flex-end'}}><Mc source={require('../assets/mc_symbol.png')}/></View>	
					<View style={styles.nums}>
						<CardNum>5757  4747  5757  4747</CardNum>
						<View style={styles.btm}><CardNum1>Victor U. Joshua</CardNum1><CardNum2>07/23</CardNum2></View>
					</View>	
		 		</Atm>
	 		</View>
	 		</View>

	 		<View style={{alignItems:'center', margin:ww(20), marginBottom:0}}><Photo source={require('../assets/photo.png')}/></View>
	 		
	 		<View style={{margin:ww(20)}}>
	 			<InputTopText>Name of Card</InputTopText>
	 			<StyledTextInput placeholder='Victor U. Joshua'/>
	 		</View>
	 		<View style={{margin:ww(20)}}>
	 			<InputTopText>Card Number</InputTopText>
	 			<StyledTextInput2><StyledTextInput1 placeholder='4747  4747  4747  4747'/><Mc2 source={require('../assets/mc_symbol.png')}/></StyledTextInput2>
	 		</View>

	 		<View style={[styles.bottom, {margin:ww(20)}]}>
		 		<View style={{width:'40%'}}>
		 			<InputTopText style={{fontWeight:500}}>Expiry date</InputTopText>
		 			<StyledTextInput placeholder='07/21'/>
		 		</View>
		 		<View style={{width:'40%'}}>
		 			<InputTopText style={{fontWeight:500}}>CVC</InputTopText>
		 			<StyledTextInput2><StyledTextInput1 placeholder='474'/><Mc2 source={require('../assets/hint.png')}/></StyledTextInput2>
		 		</View>
		 	</View>	


		 	<View style={{alignItems:'center'}}><Button3 onPress={()=>navigation.navigate('Message')}><ButtonText3>Use this Card</ButtonText3></Button3></View>
	 	</SafeAreaView>	
		)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		
		
	},
	eclipse:{
		alignItems:'flex-end',
		justifyContent:'center',
		justifySelf:'center'
	},
	btm:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},
	nums:{
		justifyContent:'space-between',
		height:'50%'
	},
	bottom:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},
})


