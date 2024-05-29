import React from "react";
import { StyleSheet, Image } from "react-native";

const AssetImage = ({ data, mode, height, width }) => {
  return <Image source={data} style={styles.image(mode, height, width)} />;
};

export default AssetImage;

const styles = StyleSheet.create({
  image: (mode, height, width) => ({
    resizeMode: mode,
    height: height,
    width: width,
  }),
});
