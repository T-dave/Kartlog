import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native'
import {Started, Kartlog, CreateAccount, StyledTextInput, StyledTextInputView, SignText, SignView, Button, StyledText} from './components/globalstyles';





export default function RegisterScreen({navigation}){
	return (
    <SafeAreaView style={styles.container}>
      <Kartlog source={require('../assets/kartlog.png')}/>
      <Started>Get Started</Started>
      <CreateAccount>Create Account to continue</CreateAccount>
      <StyledTextInputView><StyledTextInput placeholder='  Phone'/></StyledTextInputView>
      <StyledTextInputView><StyledTextInput placeholder='  Full Names'/></StyledTextInputView>
      <StyledTextInputView><StyledTextInput placeholder='  Password'/></StyledTextInputView>
      <Button onPress={()=>navigation.navigate('Verification')}><StyledText>GET STARTED</StyledText></Button>
      <SignView><SignText>Have an account? </SignText><TouchableOpacity onPress={()=>navigation.navigate('SignIn')}><SignText>Sign In</SignText></TouchableOpacity></SignView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
});