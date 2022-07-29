import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/EvilIcons';
import {Header1} from './components/header';
import {ww, wp} from '../responsive';
const myIcon = <Icon name="backspace-sharp" size={ww(30)} color="#000" />;
const myIcon3 = <Icon name="user" size={ww(30)} color="#000" />;
import styled from 'styled-components/native';
import {
	Started, 
	Kartlog, 
	CreateAccount, 
	StyledTextInput,
	StyledTextInputView2,
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
	WhiteTop,
	ProfileImage,
	SmallCamera,
	ProfileTopText,
	ProfileMidText,
	ProfileBottomText,
	UserName,
} from './components/globalstyles'



const KartlogText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(53.969)}px;
text-align: center;

color: #FFFFFF;
`;


const SignInText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(34)}px;

color: #FFFFFF;
`;


const RememberMe= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;

color: #303030;
`;

const ForgotPasword= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 500;
font-size: ${ww(12)}px;
text-align: center;

color: #067DAA;
`;

const CheckBox= styled.TouchableOpacity`
width: ${ww(20)}px;
height: ${ww(20)}px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 3.33333px;,
align-items:center;
justify-content:center;
`;






export default function SignInScreen({navigation}){
	const [isClick, setClick] = useState(0);
	const [checked, setCheck] = useState(false);
	return(
		 <SafeAreaView style={styles.container}>
		 <ScrollView showsVerticalScrollIndicator={false}>
		 <View style={{backgroundColor:"#0777A199"}}>

		 	<Header1/>

          <View style={styles.container2}>   
                  <View style={styles.kartlog}><Kartlog source={require('../assets/kartlogWhite.png')}/><SignInText>Sign into Kartlog</SignInText></View>
             </View>  
			</View>

			<View style={{alignItems:'center', margin:ww(20)}}>
			<StyledTextInputView2 onPress={()=>setClick(1)} style={ isClick == 1 ? {borderColor: '#0678A4' } : {borderColor:'#D2D2D2'}}>
				<Icon5 name="phone" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput number placeholder='Phone'/>
			</StyledTextInputView2>
			<StyledTextInputView2  onPress={()=>setClick(2)} style={ isClick == 2 ?  {borderColor: '#0678A4' } : {borderColor:'#D2D2D2'}}>
				<Icon2 name="lock-outline" size={ww(30)} color="#000" style={{margin:ww(10)}}/><StyledTextInput placeholder='Enter your password'/>
			</StyledTextInputView2>
			</View>

			<View style={[styles.center, {margin:ww(25),  marginTop:ww(5), marginBottom:ww(5)}]}>
				<View style={[styles.center, {width:'35%'}]}>
					<CheckBox onPress={()=>setCheck(!checked)}>{checked ? <Icon5 name="check" size={ww(15)} color="#6342E8" /> : <View></View>}</CheckBox>
					<RememberMe>Remember me</RememberMe>
				</View>	
				<ForgotPasword>Forgot password</ForgotPasword>
			</View>

			<View style={{alignItems:'center', margin:ww(20)}}>
				<Button onPress={()=>navigation.navigate('Cart')}><StyledText>GET STARTED</StyledText></Button>
      	<SignView><SignText>Not Registered yet? </SignText><TouchableOpacity onPress={()=>navigation.navigate('First')}><SignText style={{color:'#0680AD'}}>Create an account</SignText></TouchableOpacity></SignView>
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
  kartlog:{
    marginBottom:ww(50),
    alignItems:'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
kartlogText:{
  	fontSize:ww(53),
  	fontWeight:'700',
    color:'white',
    fontFamily:'Poppins'
  },
  center:{
  	flexDirection:'row',
  	alignItems:'center',
  	justifyContent:'space-between'
  }
});