import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import SettingTile from "../../components/Tiles/Settings/SettingTile";

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          top={50}
          left={10}
          right={10}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Account Settings"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Language"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Country"} title1={"USA"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Currency"} title1={"USD"} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Support"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Get Help"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Give a feedback"} title1={""} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Legal"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={10} />

        <SettingTile title={"Terms of Service"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Privacy Policy"} title1={""} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
