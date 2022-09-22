import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import {ww, wp} from '../responsive';
const myIcon = <Icon name="backspace-sharp" size={ww(30)} color="#000" />;

import {
	Started, 
	Kartlog, 
	CreateAccount, 
	StyledTextInput,
	SignText, 
	SignView, 
	Button, 
	StyledText, 
	StyledBack, 
	CodeBox, 
	CodeNum, 
	CodeView, 
	TopView,
	NumView,
	NumText,
	BottomView,
	TopText,
	HeaderView,
	WhiteTop,
	ProfileImage,
	SmallCamera,
	ProfileTopText,
	ProfileMidText,
	ProfileBottomText,
	UserName,
	EditStyleText,
	EditStyleText2,
	EditStyleText3,
	EditStyleText4,
	StyleTextInput,
	RedText,
	Dimension,
	TopDim,
	BtmDim,
	More,
	EditStyleButton,
	EditStyleButton1,
	EditStyleButton2,
	EditStyleButtonText1,
	EditStyleButtonText2,
	EditStyleAdd,
} from './components/globalstyles'




export default function StyleInfoScreen2({navigation}){
	const [button1, setButton1] = useState(true);
	const [button2, setButton2] = useState(false);
	const [button3, setButton3] = useState(false);
	const [button4, setButton4] = useState(false);
	const [button5, setButton5] = useState(false);
	const [button6, setButton6] = useState(false);
	return(
		 <SafeAreaView style={styles.container}>
		 <ScrollView>
		 	<HeaderView>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../assets/back.png')}/>
				</TouchableOpacity>
				<TopText>Edit Style</TopText>
				<WhiteTop source={require('../assets/white.png')}/>
			</HeaderView>	

			<View style={styles.profile}>
				<View style={styles.ini}>
					<ProfileImage source={require('../assets/victor.png')}/>
				</View>	
				<View style={styles.profileName}>
					<UserName>@Victor2822</UserName>
					<Icon2 name="square-edit-outline" style={{marginLeft:ww(10)}} size={ww(16)} color="rgba(0, 0, 0, 0.5)" />
				</View>
			</View>	

			<View>
				<EditStyleText>Style Information</EditStyleText>
				<EditStyleText2>Choose your likes</EditStyleText2>

				<EditStyleButton>
					{
						button1 ?
						<EditStyleButton2 onPress = {()=>setButton1(!button1)}>
							<EditStyleButtonText2>Senator</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton1(!button1)}>
							<EditStyleButtonText1>Senator</EditStyleButtonText1>
						</EditStyleButton1>

					}
					
					{
						button2 ?
						<EditStyleButton2 onPress = {()=>setButton2(!button2)}>
							<EditStyleButtonText2>Wedding</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton2(!button2)}>
							<EditStyleButtonText1>Wedding</EditStyleButtonText1>
						</EditStyleButton1>

					}

					{
						button3 ?
						<EditStyleButton2 onPress = {()=>setButton3(!button3)}>
							<EditStyleButtonText2>Corporate wears</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton3(!button3)}>
							<EditStyleButtonText1>Corporate wears</EditStyleButtonText1>
						</EditStyleButton1>

					}

					{
						button4 ?
						<EditStyleButton2 onPress = {()=>setButton4(!button4)}>
							<EditStyleButtonText2>Traditional wears</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton4(!button4)}>
							<EditStyleButtonText1>Traditional wears</EditStyleButtonText1>
						</EditStyleButton1>

					}

					{
						button5 ?
						<EditStyleButton2 onPress = {()=>setButton5(!button5)}>
							<EditStyleButtonText2>Blazers</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton5(!button5)}>
							<EditStyleButtonText1>Blazers</EditStyleButtonText1>
						</EditStyleButton1>

					}

					{
						button6 ?
						<EditStyleButton2 onPress = {()=>setButton6(!button6)}>
							<EditStyleButtonText2>Gown</EditStyleButtonText2>
						</EditStyleButton2>
						:
						<EditStyleButton1 onPress = {()=>setButton6(!button6)}>
							<EditStyleButtonText1>Gown</EditStyleButtonText1>
						</EditStyleButton1>

					}

				</EditStyleButton>
				<View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
				<EditStyleAdd>
					<Text style={{width:ww(9.6), height:ww(9.6), color:'white'}}>+</Text>
				</EditStyleAdd>
				</View>
			</View>

			<View style={styles.midView}>
				<View style={styles.midTexts}>
					<EditStyleText3>Style Information</EditStyleText3>
					<EditStyleText4>If you need help, watch this video</EditStyleText4>
				</View>

				<View style={styles.watchVideo}>
					<Icon3 name="youtube" size={ww(24)} color="rgba(41, 45, 50, 0.6)" />
					<RedText style={{margin:5}}>Watch Video</RedText>
				</View>
			</View>

			<View style={styles.dimensions}>
				<Dimension>
					<TopDim>Neck</TopDim>
					<BtmDim>14"</BtmDim>
				</Dimension>
				<Dimension>
					<TopDim>Chest</TopDim>
					<BtmDim>40"</BtmDim>
				</Dimension>
				<Dimension>
					<TopDim>Waist</TopDim>
					<BtmDim>34"</BtmDim>
				</Dimension>
				<Dimension>
					<TopDim>Shoulder</TopDim>
					<BtmDim>16"</BtmDim>
				</Dimension>
				<Dimension>
					<TopDim>Arm Length</TopDim>
					<BtmDim>25"</BtmDim>
				</Dimension>
				<Dimension>
					<TopDim>Inseam</TopDim>
					<BtmDim>33"</BtmDim>
				</Dimension>
			</View>
			<View style={{alignItems:'center'}}><More>+6 more measurements</More></View>

			<View style={{alignItems:'center'}}>
				<Button onPress={()=>navigation.navigate('Cart')}><StyledText>Save Changes</StyledText></Button>
				<Button onPress={()=>navigation.navigate('Tabs')} style={styles.whiteBtn}><StyledText style={styles.whiteBtnTxt}>Skip for now</StyledText></Button>
			</View>	

			</ScrollView>
		 </SafeAreaView>
		)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
    
  },
  profile:{
  	alignItems:'center'

  },
  ini:{
  	alignItems:'flex-end'
  },
  camera:{
  	bottom:ww(25),
  },
  profileName:{
  	flexDirection:'row',
  	alignItems:'center'
  },
  Button:{
  width: ww(100),
height: ww(40),
backgroundColor: 'rgba(7, 119, 162, 0.69)',
borderRadius:10,
  },
  buttons:{
  	flexDirection:'row',
  	justifyContent:'space-around',
  	alignItems:'center',
  },
  watchVideo:{
  	flexDirection:'row',
  	alignItems:'flex-end',
  	alignItems:'center'

  },
  midView:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	alignItems:'center',
  	margin:ww(20)
  },
  dimensions:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	flexWrap:'wrap',
  	alignItems:'center',
  	margin:ww(20)
  },
  whiteBtn:{
  	backgroundColor:"white"
  },
  whiteBtnTxt:{
  	color: 'rgba(0, 0, 0, 0.8)'
  }
  
});