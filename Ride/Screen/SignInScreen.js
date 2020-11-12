import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";

import styled from "styled-components/native";

const Contianer = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 10px;
  background: #fff;

`;
const InputView = styled.View`
  width: 100%;
  padding: 5px;
  height: 50px;
  border: 1px solid #fff;
  background-color: #f7f7f7;
`;

const ButtonView = styled.View`
justify-content: center;
background: #4169E1,
height: 50px;
margin-top: 20px;
border-radius: 5px;
`;
const ButtonText = styled.Text`
text-align: center;
color: #ffff;
font-size: 18px
font-weight: bold;

`;

export default function SignInScreen(props) {
  const [userDetails, setUserDatails] = useState({
    email: "",
    password: "",
  });
  const changeText = (name) => {
    return (text) => {
      setUserDatails({ ...userDetails, [name]: text });
    };
  };

  const AlertMessage = () =>
    Alert.alert(
      "Login Success",
      "You have successfully Login to the best Ride Platform",
      [
        {
          text: "Ok",
          onPress: () =>props.navigation.navigate("HomeScreen"),
          
        },
      ],
      { cancelable: false }
    );

  return (
    <Contianer>
     
        
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, color: "black", fontWeight: "700" }}>
          Email
        </Text>
        <InputView>
          <TextInput
            autoCompleteType="email"
            onChangeText={changeText("email")}
            value={userDetails.email}
            keyboardType="email-address"
            style={{ height: "100%", fontSize: 16 }}
            placeholder="Enter your email address"
          />
        </InputView>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, color: "black", fontWeight: "700" }}>
          Password
        </Text>
        <InputView>
          <TextInput
            secureTextEntry={true}
            autoCompleteType="password"
            onChangeText={changeText("password")}
            value={userDetails.password}
            style={{ height: "100%", fontSize: 16 }}
            placeholder="******"
          />
        </InputView>
      </View>
      <TouchableOpacity onPress={AlertMessage}>
        <ButtonView>
          <ButtonText>Login</ButtonText>
        </ButtonView>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text>Don't have account? </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SignUpScreen")} >
          <Text style={{ color: "#4169E1" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Contianer>
  );
}
