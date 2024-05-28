import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import { COLORS, SIZES } from "../../constants/theme";

const ProfileTile = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[reusable.rowWidthSpace("space-between"), styles.title]}>
        <View style={reusable.rowWidthSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>

        <View>
          <AntDesign name="right" size={16} color={COLORS.dark} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  title: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    padding: 10,
  },
});
