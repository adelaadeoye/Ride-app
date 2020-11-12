import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
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
export default function SignUpScreen(props) {
  const [userDetails, setUserDatails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    city: "",
  });
  const changeText = (name) => {
    return (text) => {
      setUserDatails({ ...userDetails, [name]: text });
    };
  };
  return (
    <Contianer>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Enter your Details
      </Text>

      <Text>This info will be displayed to drivers offering the ride</Text>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, color: "black", fontWeight: "700" }}>
          First name
        </Text>
        <InputView>
          <TextInput
            autoCompleteType="name"
            onChangeText={changeText("fName")}
            value={userDetails.fName}
            style={{ height: "100%", fontSize: 16 }}
            placeholder="Enter your First Name"
          />
        </InputView>
      </View>

      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, color: "black", fontWeight: "700" }}>
          Last Name
        </Text>
        <InputView>
          <TextInput
            autoCompleteType="name"
            onChangeText={changeText("lName")}
            value={userDetails.lName}
            style={{ height: "100%", fontSize: 16 }}
            placeholder="Enter your Last Name"
          />
        </InputView>
      </View>
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
          Phone Number
        </Text>
        <InputView>
          <TextInput
            autoCompleteType="tel"
            onChangeText={changeText("phome")}
            value={userDetails.phone}
            keyboardType="phone-pad"
            style={{ height: "100%", fontSize: 16 }}
            placeholder="Mobile phone number"
          />
        </InputView>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 16, color: "black", fontWeight: "700" }}>
          City
        </Text>
        <InputView>
          <TextInput
            autoCompleteType="street-address"
            keyboardType="phone-pad"
            onChangeText={changeText("city")}
            value={userDetails.city}
            style={{ height: "100%", fontSize: 16 }}
            placeholder="Which city do you reside"
          />
        </InputView>
      </View>

      <TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "#4169E1",
            height: "100%",
            marginTop: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </Contianer>
  );
}
