import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/EvilIcons';
import { LinearGradient } from 'expo-linear-gradient';
import {ww, wp} from '../responsive';
const myIcon = <Icon name="backspace-sharp" size={ww(30)} color="#000" />;
const myIcon3 = <Icon name="user" size={ww(30)} color="#000" />;
import styled from 'styled-components/native';
import {
	FeedImg,
	HeaderView,
	StyledBack2,
	TopText,
	FeedText1,
	FeedText2,
	FeedText3,
	FeedText4,
	VerificationImage,
	FireImage,
	NumStore,
	SortText,
	TopText1,
	BrandImage,
	BrandName,
	Oval,
	VerificationImage2,
	LocationImage,
	BrandLocation
} from './components/globalstyles'






export default function  Brands({navigation}){
	const brands = [
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'}
	]

	return(
		 <SafeAreaView style={styles.container}>

		 <HeaderView style={{backgroundColor:'#fff'}}>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center', alignItem:'center'}}>
					<StyledBack2 source={require('../assets/vector1-2.png')}/>
				</TouchableOpacity>
				<TopText1>Brands</TopText1>
				<TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center', alignItem:'center'}}>
					<StyledBack2 source={require('../assets/vector2-2.png')}/>
				</TouchableOpacity>
			</HeaderView>	

			<View>
				<NumStore>51 Stores</NumStore>
				<SortText>Sort By</SortText>
				<SortText>Near me</SortText>
			</View>
		 <ScrollView showsVerticalScrollIndicator={false}>
		 		{
		 			brands.map((item, index)=>{
		 				return(
		 			<TouchableOpacity key={index} onPress={()=>navigation.navigate('Brands2')}>
			 			<View style={styles.topView}>
			 			<View style={{flexDirection:'row'}}>
				 			<BrandImage source={item.image}/>
				 			<BrandName>{item.name}</BrandName>
				 			<VerificationImage2 source={require('../assets/verified1.png')} style={{ marginLeft:10}}/>
			 			</View>
			 			<View style={{flexDirection:'row', top:9, }}>
			 				<Oval></Oval>
			 				<Oval></Oval>
			 				<Oval></Oval>
			 			</View>
			 		</View>
					<View style={styles.location}>
						<LocationImage source={require('../assets/location.png')} resizeMode="contain"/>
						<BrandLocation>{item.town}, {item.city}</BrandLocation>
					</View>
				</TouchableOpacity>	
		 					)
		 			})
		 		}
		 		

			</ScrollView>
		 </SafeAreaView>
		)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    marginTop:30
    
  },
  topView:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	margin:20
  },
  location:{
  	flexDirection:'row',
  	 alignItems:'center',
  	 left:104,
  	 bottom:55
  	}
  
});