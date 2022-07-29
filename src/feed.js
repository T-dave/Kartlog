import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
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
} from './components/globalstyles'






export default function FeedScreen({navigation}){
	const feed =[
{image:require('../assets/lady.png'), name:'Agbanni Lux', dress:'The Eta Dress(Matera type: Crepe)', oldPrice:'28,800.00', newPrice:'21,300.00', verified:true},
{image:require('../assets/victor.png'), name:'Agbanni Lux', dress:'The Eta Dress(Matera type: Crepe)', oldPrice:'28,800.00', newPrice:'21,300.00', verified:false},
{image:require('../assets/lady.png'), name:'Agbanni Lux', dress:'The Eta Dress(Matera type: Crepe)', oldPrice:'28,800.00', newPrice:'21,300.00', verified:true},
{image:require('../assets/victor.png'), name:'Agbanni Lux', dress:'The Eta Dress(Matera type: Crepe)', oldPrice:'28,800.00', newPrice:'21,300.00', verified:false},
	]
	return(
		 <SafeAreaView style={styles.container}>
		 <LinearGradient colors={['rgba(0,0,0,0.9)', 'transparent']}  style={styles.feedTop}>

        <HeaderView>
		 		<TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center', alignItem:'center'}}>
					<StyledBack2 source={require('../assets/vector1-1.png')}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center', alignItem:'center'}}>
					<StyledBack2 source={require('../assets/vector2-1.png')}/>
				</TouchableOpacity>
			</HeaderView>	

      </LinearGradient>
		 <ScrollView showsVerticalScrollIndicator={false}>
		 	
      {
      	feed.map((item, index)=>{
      		return(
      	<FeedImg source={item.image} key={index}>
				<LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={styles.feedBottom}>
				
					<View style={styles.row}>
						<View>
		        	<View style={styles.row1}>
								<View style={styles.ovals}>
										<View style={styles.oval}></View>
										<View style={styles.oval}></View>
										<View style={styles.oval}></View>

								</View>
								<FeedText1>{item.name}</FeedText1>
								{
									item.verified ?
									<VerificationImage source={require('../assets/verified.png')}/>
									:
									<View></View>
								}
								
							</View>	
							<FeedText2>The Eta Dress(Matera type: Crepe)</FeedText2>
							<View style={styles.row2}>
								<FeedText4>₦{item.newPrice}</FeedText4>
								<FeedText3 style={styles.old}>₦{item.oldPrice} NGN</FeedText3>
							</View>
						</View>
						
							<View style={styles.right}>
								<FireImage source={require('../assets/fire.png')} style={{left:3}}/>
								<FireImage source={require('../assets/vector2-1.png')}/>
							</View>
							
					</View>


      </LinearGradient>
			
			</FeedImg>
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
  feedTop:{
  	position:'absolute',
  	zIndex:1,
  	width:'100%',
  	height:ww(75),
  	alignItems:'center'
  },
  feedBottom:{
  	height:ww(150),
  	justifyContent:'flex-end',
  	paddingLeft:15,
  	paddingRight:20,
  	paddingBottom:20,

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
  right:{
  	justifyContent:'space-between',
  	alignItems:'center',
  	height:'70%'
  }
  
});