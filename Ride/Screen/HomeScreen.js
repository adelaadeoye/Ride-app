import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import styled from "styled-components/native";

const Contianer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  margin-top:40px;
  height:100%;
  background:red;
`;

export default function HomeScreen(props) {
  return (
    <Contianer>
      <Text>Welcome</Text>
      <TouchableOpacity>
        <View>
          <Text>Sign In</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("SignUpScreen")}>
        <View>
          <Text>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </Contianer>
  );
}
