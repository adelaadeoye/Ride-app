import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import car from "../assets/car.jpg"
import styled from "styled-components/native";

const Contianer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  margin-top:-250px;
  height:100%;
  background:white;
  justify-content:center;
`;
const ButtonView = styled.View`
justify-content: center;
background: #4169E1,
height: 50px;
width:300px
margin-top: 20px;
border-radius: 5px;
`;
const ButtonText = styled.Text`
text-align: center;
color: #ffff;
font-size: 18px
font-weight: bold;
width:100%


`;

export default function HomeScreen(props) {
  return (
    <Contianer>
      <Image style={{ width:300, resizeMode:"contain"}}source={car}/>
      <Text style={{fontSize:30,fontWeight:"bold"}}>Welcome to best Ride App</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate("SignInScreen")}>
        <ButtonView>
          <ButtonText>Sign In</ButtonText>
        </ButtonView>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("SignUpScreen")}>
      <ButtonView>
          <ButtonText>Sign Up</ButtonText>
        </ButtonView>
      </TouchableOpacity>
    </Contianer>
  );
}
