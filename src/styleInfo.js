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
	UserName
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
					<Icon2 name="square-edit-outline" style={{marginLeft:ww(10)}} size={ww(16)} color="rgba(0, 0, 0, 0.5)" />
				</View>
			</View>	

			<View style={{alignItems:'center'}}>
				<ProfileTopText>A brief bio abot yourself. define your fashion style in a sentence</ProfileTopText>
				<ProfileMidText>#Ankara #Pyjamas #Senator #Buba #Suit #Jalamia</ProfileMidText>
				<View style={styles.profileName}>
					<ProfileBottomText>Edit Styled</ProfileBottomText>
					<Icon2 name="square-edit-outline" style={{marginLeft:ww(10)}} size={ww(16)} color="rgba(0, 0, 0, 0.5)" />
				</View>
			</View>
			<View style={{alignItems:'center', margin:ww(20)}}>
			<StyledTextInputView>
				<Icon3 name="user" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Victor Udoh'/>
			</StyledTextInputView>
			<StyledTextInputView>
				<Icon4 name="envelope-o" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Email'/>
			</StyledTextInputView>
			<StyledTextInputView>
				<Icon5 name="phone" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Phone'/>
			</StyledTextInputView>
			<StyledTextInputView>
				<Icon6 name="calendar" size={ww(40)} color="#000" style={{margin:ww(5)}}/><StyledTextInput placeholder='VictorUdoh_official'/>
			</StyledTextInputView>
			<StyledTextInputView>
				<Icon3 name="instagram" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Birth date'/>
			</StyledTextInputView>
			</View>
			<View style={{alignItems:'center'}}>
				<Button onPress={()=>navigation.navigate('StyleInfo2')}><StyledText>Save Changes</StyledText></Button>
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