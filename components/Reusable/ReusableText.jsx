import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReusableText = ({ text, family, size, color, align }) => {
  return (
    <View>
      <Text style={styles.textStyle(family, size, color, align)}>{text}</Text>
    </View>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, align) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
  }),
});
