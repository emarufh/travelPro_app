import React from "react";
import { Image, Platform, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import NetworkImage from "../components/Reusable/NetworkImage";
import { COLORS, SIZES } from "../constants/theme";
import AppBar from "../components/Reusable/AppBar";
import styles from "./topTab.style";
import HeightSpacer from "../components/Reusable/HeightSpacer";
import ReusableText from "../components/Reusable/ReusableText";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={"100%"}
            height={
              Platform.OS === "android"
                ? SIZES.height * 0.4
                : SIZES.height * 0.35
            }
            radius={0}
          />

          <AppBar
            title={""}
            color={COLORS.white}
            color1={COLORS.white}
            icon={"logout"}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
            top={50}
            left={15}
            right={15}
          />

          <View style={styles.profile}>
            <Image
              source={require("../assets/images/profile.jpg")}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={styles.text}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"King Andre"}
                  family={"bold"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={5} />

            <View style={styles.text}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"andre@email.com"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Info" component={TopInfo} />
        <Tab.Screen name="Trips" component={TopTrips} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
