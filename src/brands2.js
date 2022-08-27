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
	BrandName2,
	BrandDescription2,
	Oval,
	VerificationImage2,
	LocationImage,
	BrandLocation,
	BrandLocation2,
	ProfilePic
} from './components/globalstyles'






export default function Brands2({navigation}){
	const brands = [
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'},
		{image:require('../assets/grey.png'), name:'Stoic Apparel', town:'Ikorodu', city:'Lagos'}
	];
	const verified = true;

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
			<ScrollView>

			<View style={styles.header}>
				<ProfilePic source={require('../assets/profilePic.png')} style={{top:55}}/>
			</View>

			<View style={styles.topText}>

				<View style={{flexDirection:'row'}}>
					<LocationImage source={require('../assets/location.png')} resizeMode="contain"/>
					<View>
						<BrandLocation2>Ikorodu, Lagos</BrandLocation2>
						<BrandLocation2>14, Anjorin Street</BrandLocation2>
					</View>	
				</View>	

				<View style={{flexDirection:'row'}}>
					<LocationImage source={require('../assets/bell.png')} resizeMode="contain"/>
					<BrandLocation2>56k followers</BrandLocation2>
				</View>	

			</View>

			<View style={styles.description}>
				<BrandName2>Stoic Apparel</BrandName2>
				<BrandDescription2>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
				</BrandDescription2>
			</View>

			<FeedImg source={require('../assets/lady.png')} style={{marginTop:20}}>
					<LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={styles.feedBottom}>
					
						<View style={styles.row}>
							<View>
			        	<View style={styles.row1}>
									<View style={styles.ovals}>
											<View style={styles.oval}></View>
											<View style={styles.oval}></View>
											<View style={styles.oval}></View>

									</View>
									<FeedText1>Stoic Apparel</FeedText1>
									{
										verified ?
										<VerificationImage source={require('../assets/verified.png')}/>
										:
										<View></View>
									}
									
								</View>	
								<FeedText2>The Eta Dress(Matera type: Crepe)</FeedText2>
								<View style={styles.row2}>
									<FeedText4>₦21,300.00</FeedText4>
									<FeedText3 style={styles.old}>₦28,800.00 NGN</FeedText3>
								</View>
							</View>
							
								<View style={styles.right}>
									<FireImage source={require('../assets/fire.png')} style={{left:3}}/>
									<FireImage source={require('../assets/vector2-1.png')}/>
								</View>
								
						</View>


	      </LinearGradient>
			
			</FeedImg>


			
		 		

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
  	},
  	header:{
  		backgroundColor:'#989898',
  		height:ww(112),
  		alignItems:'center',
  		justifyContent:'flex-end'
  	},
  	topText:{
  		flexDirection:'row',
  		justifyContent:'space-between',
  		alignItems:'center',
  		margin:15
  	},
  	description:{
  		alignItems:'center',
  		marginTop:20
  	},
  	oval:{
  	width:ww(3),
  	height:ww(3),
  	borderRadius:20,
  	backgroundColor:'#fff'
  },
  row1:{
  	flexDirection:'row',
  	alignItems:'center'
  },
  row2:{
  	flexDirection:'row',
  	alignItems:'flex-end'
  },
  ovals:{
  	height:18,
  	justifyContent:'space-between',
  	right:8
  },
  row:{
  	flexDirection:'row',
  	alignItems:'flex-end',
  	justifyContent:'space-between'
  },
  old:{
  	textDecorationLine: 'line-through',
  	textDecorationStyle: 'solid', 
  	marginLeft:6
  },


  
});