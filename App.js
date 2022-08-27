import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {ww, wp} from './responsive';
import SplashScreen from './src/splash';
import FirstScreen from './src/first';
import HomeScreen from './src/home';
import VerificationScreen from './src/verification';
import StyleInfoScreen from './src/styleInfo';
import StyleInfoScreen2 from './src/styleInfo2';
import SignIn from './src/signIn';
import Cart from './src/cart';
import OhSnap from './src/ohSnap';
import Payment from './src/payment';
import Notification from './src/notification';
import Message from './src/message';
import Message2 from './src/message2';
import FeedScreen from './src/feed';
import Wishlist from './src/wishlist';
import Brands from './src/brands';
import Brands2 from './src/brands2';

const Tabs = createMaterialBottomTabNavigator();


const Stack = createNativeStackNavigator();


export default function App  () {

    
     return(
    <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen name="Splash"
        component={SplashScreen}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="First"
        component={FirstScreen}
        options={{
      headerShown: false,}}/>
        <Stack.Screen name="Home"
        component={HomeScreen}
        options={{
      headerShown: false,}}/>
        <Stack.Screen name="Verification"
        component={VerificationScreen}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="StyleInfo"
        component={StyleInfoScreen}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="StyleInfo2"
        component={StyleInfoScreen2}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="SignIn"
        component={SignIn}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Cart"
        component={Cart}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="OhSnap"
        component={OhSnap}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Payment"
        component={Payment}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Notification"
        component={Notification}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Message"
        component={Message}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Tabs"
        component={TabScreens}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Brands2"
        component={Brands2}
        options={{
      headerShown: false,}}/>
      <Stack.Screen name="Message2"
        component={Message2}
        options={{
      headerShown: false,}}/>
    </Stack.Navigator>
    </NavigationContainer>    
     
    );
};


const BrandScreen=()=>{

    
     return(
   <Stack.Navigator>
      <Stack.Screen name="Brands"
        component={Brands}
        options={{
      headerShown: false,}}/>  
      <Stack.Screen name="Brands2"
        component={Brands2}
        options={{
      headerShown: false,}}/>
    </Stack.Navigator>  
     
    );
};


const TabScreens=()=>{
  return(
    <Tabs.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
  inactiveColor="#000000"
  barStyle={{ backgroundColor: '#fff' }}
  labeled={false}
    >
      <Tabs.Screen name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => (
           
              color == '#fff'? 
              <Image source={require('./assets/icon1-1.png')} style={{width:ww(21), height:ww(21)}}/>
              :
              <Image source={require('./assets/icon1.png')} style={{width:ww(21), height:ww(21)}}/>

          ),
        }}/>
      <Tabs.Screen name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color }) => (
            color == '#fff'?
              <Icon name="heart" size={ww(21)} color="#0777A1" />
              :
              <Icon name="hearto" size={ww(21)} color="black" />
          ),
        }}/>
        <Tabs.Screen name="BrandScreen"
        component={BrandScreen}
        options={{
          tabBarIcon: ({ color }) => (
            color == '#fff'?
              <Image source={require('./assets/icon5-1.png')} style={{width:ww(21), height:ww(21)}}/>
              :
              <Image source={require('./assets/icon5.png')} style={{width:ww(21), height:ww(21)}}/>
          ),
        }}/>
      
      <Tabs.Screen name="Notification2"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            color == '#fff'?
              <Image source={require('./assets/icon4-1.png')} style={{width:ww(21), height:ww(21)}}/>
              :
              <Image source={require('./assets/icon4.png')} style={{width:ww(21), height:ww(21)}}/>
          ),
        }}/>  
        <Tabs.Screen name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            color == '#fff'?
              <Image source={require('./assets/icon3-1.png')} style={{width:ww(21), height:ww(21)}}/>
              :
              <Image source={require('./assets/icon3.png')} style={{width:ww(21), height:ww(21)}}/>
          ),
        }}/>
    </Tabs.Navigator>  
    )
}
