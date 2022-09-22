import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/EvilIcons';
import {ww, wp} from '../responsive';
const myIcon = <Icon name="backspace-sharp" size={ww(30)} color="#000" />;
const myIcon3 = <Icon name="user" size={ww(30)} color="#000" />;
import styled from 'styled-components/native';
import {
	Started, 
	Kartlog, 
	CreateAccount, 
	StyledTextInput,
	StyledTextInputView,
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
	InfoText,
	InfoText2,
} from './components/globalstyles'




export default function StyleInfoScreen({navigation}){
	return(
		 <SafeAreaView style={styles.container}>
		 <ScrollView>
		 	<HeaderView>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../assets/back.png')}/>
				</TouchableOpacity>
				<TopText>Edit Style</TopText>
				<View style={{width:1}}></View>
			</HeaderView>	

			<View style={styles.profile}>
				<View style={styles.ini}>
					<ProfileImage source={require('../assets/victor.png')}/>
					<SmallCamera source={require('../assets/camera.png')} style={styles.camera}/>
				</View>	
				<View style={styles.profileName}>
					<UserName>@Victor2822</UserName>
				</View>
			</View>	


			<View style={{alignItems:'center', margin:ww(20)}}>

			<View style={{width:ww(332), marginBottom:20}}>
				<InfoText>
					Personal Details
				</InfoText>
			</View>

			<View style={{width:ww(332)}}>
				<InfoText2>
					Name
				</InfoText2>
			</View>
			<StyledTextInputView>
				<Icon3 name="user" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Victor Udoh'/>
			</StyledTextInputView>

			<View style={{width:ww(332)}}>
				<InfoText2>
					Email
				</InfoText2>
			</View>
			<StyledTextInputView>
				<Icon4 name="envelope-o" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Email'/>
			</StyledTextInputView>

			<View style={{width:ww(332)}}>
				<InfoText2>
					Phone
				</InfoText2>
			</View>
			<StyledTextInputView>
				<Icon5 name="phone" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Phone'/>
			</StyledTextInputView>

			<View style={{width:ww(332)}}>
				<InfoText2>
					Instagram Handle
				</InfoText2>
			</View>
			<StyledTextInputView>
				<Icon3 name="instagram" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Birth date'/>
			</StyledTextInputView>

			</View>

			<View style={{alignItems:'center'}}>
				<Button onPress={()=>navigation.navigate('StyleInfo2')}><StyledText>Save</StyledText></Button>
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
  }
  
});