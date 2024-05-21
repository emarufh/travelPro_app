import React from "react";
import { StyleSheet, Image } from "react-native";

const NetworkImage = ({ source, width, height, radius }) => {
  // console.log("Source Image : ", source);

  return (
    <Image
      source={{ uri: source }}
      // source={require("../../assets/images/hotel1.jpeg")}
      style={styles.image(width, height, radius)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});
