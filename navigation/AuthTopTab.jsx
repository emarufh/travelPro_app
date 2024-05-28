import React from "react";
import { Image, ScrollView, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import HeightSpacer from "../components/Reusable/HeightSpacer";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={40} />

        <Image
          source={require("../assets/images/bg2.png")}
          style={{ width: "100%", height: 300, resizeMode: "contain" }}
        />

        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Sign In" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;
