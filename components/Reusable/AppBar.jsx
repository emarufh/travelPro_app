import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, TEXT } from "../../constants/theme";
import reusable from "./reusable.style";
import ReusableText from "../Reusable/ReusableText";

const AppBar = ({ title, color, color1, icon, onPress, onPress1 }) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWidthSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={20} />
        </TouchableOpacity>

        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity style={styles.box(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
