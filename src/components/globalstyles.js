import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import {ww, wp} from '../../responsive';
 

export const Started= styled.Text`
  
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(34)}px;
margin-top:${ww(50)}px;

color: rgba(0, 0, 0, 0.86);
`;

export const Kartlog= styled.Image`
  
width: ${ww(54)}px;
height: ${ww(58.14)}px;
margin-top:${ww(30)}px;
`;

export const CreateAccount= styled.Text`
  
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(18)}px;
margin-bottom:${ww(30)}px;
color: rgba(0, 0, 0, 0.5);
`;

export const StyledTextInput= styled.TextInput`
width: 100%;
height: 100%;
`;

export const StyledTextInputView= styled.View`
width: ${ww(332)}px;
height: ${ww(67)}px;
border: 0.5px solid rgba(32, 30, 30, 0.4);
border-radius: 15px;
margin-bottom:${ww(40)}px;
flex-direction:row;
align-items:center;
`;


export const StyledTextInputView2= styled.TouchableOpacity`
width: ${ww(324)}px;
height: ${ww(50)}px;
margin: ${ww(20)}px;
background: #FFFFFF;
border: 1px solid #D2D2D2;
border-radius: 8px;
flex-direction:row;
align-items:center;
`;



export const SignText= styled.Text`
  
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: ${ww(18)}px;

color: rgba(0, 0, 0, 0.7);
`;


export const SignView= styled.View`
flex-direction:row;
`;


export const Button= styled.TouchableOpacity`
background-color:  #066D95;
color: #FFFFFF;
border-radius: 20px;
height: ${ww(60)}px;
width: ${ww(332)}px;
flex-direction:row;
justify-content:center;
align-items:center;
margin:${ww(10)}px 0 ${ww(10)}px 0;

`;


export const Button2= styled.TouchableOpacity`
width: ${ww(316)}px;
height: ${ww(54)}px;
background: #0777A2;
border-radius: 20px;
align-items:center;
justify-content: center;

`;


export const StyledText= styled.Text`
  

font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(18)}px;
text-transform: uppercase;
color: #FFFFFF;
`;


export const StyledText2= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(11)}px;
text-transform: uppercase;

color: #FFFFFF;
`;


export const StyledBack= styled.Image`
width: ${ww(36)}px;
height: ${ww(36)}px;
`;



export const StyledBack3= styled.Image`
height: ${ww(12)}px;
width: ${ww(6)}px;
`;


export const BackView3= styled.View`
height: ${ww(37)}px;
width: ${ww(37)}px;
background: #D9D9D9;
border-radius:50;
align-items:center;
justify-content:center;
`;





export const StyledBack2= styled.Image`
width: ${ww(26)}px;
height: ${ww(26)}px;
`;


export const CodeBox= styled.TextInput`
width: ${ww(60)}px;
height: ${ww(60)}px;
align-items:center;
justify-content:center;
text-align:center;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 15px;
`;

export const CodeNum= styled.Text`
  

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(30)}px;
color: rgba(0, 0, 0, 0.86);
`;

export const CodeView= styled.View`
  margin:${ww(20)}px;
  flex-direction:row;
  justify-content:space-between;
`;

export const TopView= styled.View`
  background: #FFFFFF;
`;

export const NumView= styled.View`
width: ${ww(88.06)}px;
height: ${ww(57.29)}px;
margin:${ww(10)}px;
background: #FFFFFF;
border-radius: 15.9153px;
align-items:center;
justify-content:center;
`;


export const NumText= styled.Text`
  
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(30)}px;

color: #000000;
`;

export const BottomView= styled.View`
  flex-wrap:wrap;
  flex-direction:row;
  alignItems:center;
  justify-content:center;

`;


export const TopText= styled.Text`
  

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: ${ww(24)}px;
text-align: center;

color: rgba(0, 0, 0, 0.9);
`;


export const HeaderView= styled.View`
  flex-direction:row;
  alignItems:center;
  justify-content:space-between;
  padding:${ww(20)}px;
  margin:0;
  width:100%;

`;

export const WhiteTop= styled.Image`
  height:${ww(9)}px;
  width:${ww(9)}px;

`;


export const ProfileImage= styled.Image`
width: ${ww(91.41)}px;
height: ${ww(91.41)}px;
border-radius:50px;
`;


export const SmallCamera= styled.Image`
width: ${ww(16)}px;
height: ${ww(16)}px;
border-radius:50px;
`;


export const UserName= styled.Text`
  
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(16)}px;
align-items: center;

color: rgba(0, 0, 0, 0.5);
`;


export const ProfileTopText= styled.Text`
  
width: ${ww(297)}px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: ${ww(16)}px;
margin:${ww(20)}px 0 ${ww(5)}px 0;
text-align: center;

color: rgba(0, 0, 0, 0.7);
`;


export const ProfileMidText= styled.Text`
  
width: ${ww(208)}px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
text-align: center;

color: rgba(0, 0, 0, 0.7);
`;

export const ProfileBottomText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
text-align: center;
color: #F24E1E;
`;




export const EditStyleText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(18)}px;
margin:0 0 0 ${ww(20)}px;
display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.8);
`;

export const EditStyleText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(12)}px;
align-items: center;
margin:0 0 0 ${ww(20)}px;
color: rgba(0, 0, 0, 0.5);
`;


export const StyleTextInput= styled.TextInput`
width: ${ww(358)}px;
height: ${ww(50)}px;
background: #F4F4F4;
border-radius: 10px;
`;





export const EditStyleText3= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(18)}px;
display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.8);
`;



export const EditStyleText4= styled.Text`
font-family: 'Avenir Next LT Pro';
font-style: normal;
font-weight: 400;
font-size: ${ww(12)}px;
align-items: center;

color: rgba(0, 0, 0, 0.5);
`;


export const EditStyleButton= styled.View`
flex-wrap: wrap;
flex-direction:row;
align-items: center;
justify-content:center;
margin: ${ww(15)}px;
`;

export const EditStyleButton1= styled.TouchableOpacity`
min-width: ${ww(94)}px;
height: ${ww(50)}px;
border: 1px solid rgba(196, 196, 196, 0.5);
border-radius: 15px;
align-items: center;
justify-content:center;
margin: ${ww(15)}px;
`;

export const EditStyleButton2= styled.TouchableOpacity`
min-width: ${ww(94)}px;
height: ${ww(50)}px;
background: #0777A2;
border-radius: 10px;
align-items: center;
justify-content:center;
margin: ${ww(15)}px;
`;

export const EditStyleButtonText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(14)}px;
color: #FFFFFF;
margin: ${ww(7)}px;
`;


export const EditStyleButtonText1= styled.Text`
font-family: 'Avenir Next LT Pro';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
color: rgba(0, 0, 0, 0.5);
margin: ${ww(7)}px;
`;


export const EditStyleAdd= styled.TouchableOpacity`
width: ${ww(24)}px;
height: ${ww(24)}px;
background: #FF4D6D;
align-items:center;
justify-content:center;
border-radius:3;
margin-bottom: ${ww(20)}px;
`;


export const RedText= styled.Text`

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(12)}px;
color: #F24E1E;
`;


export const Dimension= styled.View`

width: ${ww(124.82)}px;
height: ${ww(126)}px;
margin:${ww(20)}px;
border: 1.17757px solid rgba(196, 196, 196, 0.5);
border-radius: 17.6636px;
justify-content:space-between;
align-items:center;
`;



export const TopDim= styled.Text`

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(14)}px;
align-items: center;
margin:${ww(10)}px;
color: rgba(0, 0, 0, 0.5);

`;


export const BtmDim= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(36)}px;
align-items: center;
margin:${ww(15)}px;
color: rgba(0, 0, 0, 0.9);

`;


export const More= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(12)}px;
display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);
`;

export const EmptyCartText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(16)}px;
text-align: center;
margin:${ww(20)}px;
color: rgba(0, 0, 0, 0.5);
`;

export const EmptyCartImage= styled.Image`
width: ${ww(126)}px;
height: ${ww(126)}px;
`;


export const OhSnapText= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(24)}px;
text-align: center;

color: #181725;
`;


export const OhSnapText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
display: flex;
align-items: center;
text-align: center;

color: #A1A1A1;
`;


export const BackText= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: ${ww(12)}px;
text-align: center;

color: #000000;
`;

export const Atm= styled.ImageBackground`
width: 100%;
height: ${ww(240)}px;

justify-content:space-between;
`;

export const Mc= styled.Image`
width: ${ww(64.17)}px;
height: ${ww(40)}px;
margin:${ww(35)}px ${ww(20)}px 0 0;
`;

export const Mc2= styled.Image`
width: ${ww(32.35)}px;
height: ${ww(20)}px;
margin-right:${ww(10)}px;
`;


export const CardNum= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: ${ww(25)}px;
align-items: center;
text-align: center;
letter-spacing: 0.0878em;
color: #FFFFFF;

text-shadow: 0px 0.701049px 3px rgba(77, 5, 169, 0.3);
`;


export const CardNum1= styled.Text`
font-family: 'Avenir LT Std';
font-style: normal;
font-weight: 400;
font-size: ${ww(14)}px;
margin:${ww(20)}px;
display: flex;
align-items: center;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #FFFFFF;

text-shadow: 0px 0.701049px 3px rgba(77, 5, 169, 0.3);
`;


export const CardNum2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: ${ww(14)}px;
margin:${ww(20)}px;
display: flex;
align-items: center;
text-align: right;
letter-spacing: 0.0025em;
color: #FFFFFF;

text-shadow: 0px 0.701049px 3px rgba(77, 5, 169, 0.3);
`;


export const InputTopText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: ${ww(14)}px;
align-items: center;
letter-spacing: -0.41px;
color: #000000;
`;


export const Button3= styled.TouchableOpacity`
height: ${ww(50)}px;
width: ${ww(354)}px;
border-radius: 10px;
background: #078BBD;
align-items:center;
justify-content:center;
`;


export const ButtonText3= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 900;
font-size: ${ww(12)}px;
text-transform: uppercase;

color: #FFFFFF;
`;



export const NotificationText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(14)}px;
color: #000000;
flex-wrap:wrap;
`;



export const FeedImg= styled.ImageBackground`
width: ${ww(428)}px;
height: ${ww(650)}px;
margin-bottom:${ww(20)}px;
justify-content:flex-end;
`;



export const FeedText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin:3px;
color: rgba(255, 255, 255, 0.8);
`;





export const FeedText3= styled.Text`
font-family: Poppins;
font-size: 11px;
font-weight: 600;
color: #FFFFFF;
margin:3px;
margin-bottom:0;
`;



export const FeedText4= styled.Text`
font-family: Avenir Next LT Pro;
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
margin:3px;
margin-bottom:0;
`;


export const FeedText1= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
text-align: center;
color: #FFFFFF;
margin:3px;
`;



export const VerificationImage= styled.Image`
height: 18px;
width: 18px;
border-radius: 0px;
margin-left: 15px;
`;



export const FireImage= styled.Image`
height: 24px;
width: 24px;
border-radius: 0px;
`;



export const TopText1= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: rgba(0, 0, 0, 0.9);
`;



export const NumStore= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;

color: rgba(0, 0, 0, 0.9);
`;



export const BrandSearchView= styled.View`
width: 168px;
height: 40px;
background: rgba(196, 196, 196, 0.2);
border: 0.5px solid rgba(180, 180, 180, 0.67);
border-radius: 10px;
flex-direction:row;
align-items:center;
`;



export const SortText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: rgba(0, 0, 0, 0.9);
`;


export const BrandImage= styled.Image`
width: 64px;
height: 64px;
margin-right: 20px;
`;



export const BrandName= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: 18px;
color: rgba(23, 26, 37, 0.79);
`;




export const Oval= styled.View`
width: 4px;
height: 4px;
background: rgba(23, 26, 37, 0.79);
border-radius:20px;
margin:3px;
`;



export const VerificationImage2= styled.Image`
height: 20px;
width: 20px;
`;

export const LocationImage= styled.Image`
height: 13.298830032348633px;
width: 10px;
margin-right:5px;
`;



export const BrandLocation= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
`;




export const ProfilePic= styled.Image`
width: 96px;
height: 96px;
border-radius:50px;
border: 3px solid #FFFFFF;
z-index:10;
`;



export const BrandLocation2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
color: #000000;
`;


export const BrandName2= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 900;
font-size: 18px;
color: rgba(23, 26, 37, 0.79);
`;




export const BrandDescription2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: rgba(0, 0, 0, 0.8);
width:80%;
text-align:center;
`;



export const MessageImage= styled.Image`
width: 195px;
height: 185px;
margin-top:10px;
`;



export const MessageTime= styled.Text`
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 12px;
color: #7C7C7C;
`;



export const MessageView1= styled.View`
width: 50%;
padding:10px;
margin:10px;
margin-left:0;
background: rgba(196, 196, 196, 0.5);
border-radius: 10px;
align-items:center;
justify-content:center;
`;


export const MessageView2= styled.View`
width: 50%;
padding:10px;
margin:10px;
margin-right:0;
background: #0777A2;
border-radius: 10px;
align-items:center;
justify-content:center;
`;



export const MessageViewText1= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
`;



export const MessageViewText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
`;



export const MessageInput= styled.View`
box-sizing: border-box;
width: ${ww(248)}px;
background: #FFFFFF;
border: 1px solid #0777A2;
border-radius: 10px;
flex-direction:row;
align-items:center;
margin-right: ${ww(20)}px;
`;


export const MessageInputIcon= styled.Image`
height: 24px;
width: 24px;
margin: ${ww(3)}px;
`;


export const MessageMicView= styled.View`
width: ${ww(54)}px;
height: ${ww(54)}px;
background: #0777A2;
border-radius: 10px;
align-items: center;
justify-content: center;

`;


export const MessageMic= styled.Image`
width: ${ww(24)}px;
height: ${ww(24)}px;
`;


export const MessageBrand= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #484848;
`;


export const InfoText= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: ${ww(16)}px;
align-self: left;

color: rgba(0, 0, 0, 0.8);
`;


export const InfoText2= styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: ${ww(14)}px;

color: rgba(0, 0, 0, 0.5);
`;
