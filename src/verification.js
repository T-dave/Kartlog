import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ww, wp} from '../responsive';
const myIcon = <Icon name="backspace-sharp" size={ww(30)} color="#000" />;
import styled from 'styled-components/native';
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
	HeaderView,
	TopText
} from './components/globalstyles'





export default function VerificationScreen({navigation}){
	const nums=['1','2','3','4','5','6','7','8','9','', '0', myIcon];
	return (
		 <SafeAreaView style={styles.container}>
		 <ScrollView showsVerticalScrollIndicator={false}>

		 <HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{width:ww(20), justifyContent:'center', alignItem:'center'}}>
					<StyledBack source={require('../assets/back.png')}/>
				</TouchableOpacity>
				<TopText>Edit Style</TopText>
				<View style={{width:1}}></View>
			</HeaderView>	

			 <TopView style={styles.top}>
				 <View style={styles.content}>
				 <TouchableOpacity onPress={()=>navigation.navigate('StyleInfo')}><Kartlog source={require('../assets/kartlog.png')}/></TouchableOpacity>
				 	<Started>Verification Code</Started>
		      <CreateAccount>Code is sent to +2347063666-667</CreateAccount>
		     </View> 
		      <CodeView>
		      	<CodeBox />
		      	<CodeBox />
		      	<CodeBox />
		      	<CodeBox />
				 	</CodeView>

				 	<View style={styles.center}>
				 		<SignView><SignText style={{fontWeight:'400'}}>Didn’t recieve code? </SignText><TouchableOpacity><SignText>Recieve again</SignText></TouchableOpacity></SignView>
				 		<SignView><TouchableOpacity><SignText>Get Via Call</SignText></TouchableOpacity></SignView> 
				 	</View>	
			 	</TopView>
			 	<BottomView style={styles.bottom}>
			 	{nums.map((item, index) => {
	            return (
	           <NumView key={index}>
			 			<NumText>{item}</NumText>
			 		</NumView>
	            );
	          })}
			 	</BottomView>
		 	</ScrollView>
		 </SafeAreaView>
		);

}	



const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },

  content:{
  	alignItems:'center',
  	margin:0
  },
  center:{
  	alignItems:'center',
  	margin:ww(20),
  	justifySelf:'flex-end'
  },
  top:{
  	flex:2.5,
  	borderBottomLeftRadius:30,
  	borderBottomRightRadius:30,
  	margin:0,
  	backgroundColor:'#fff'
  },
  bottom:{
  	flex:1
  }
  
});
