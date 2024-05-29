import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./slides.style";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableText from "../Reusable/ReusableText";
import HeightSpacer from "../Reusable/HeightSpacer";
import ReusableButton from "../Reusable/ReusableButton";

const Slides = ({ item }) => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.container, { height: "100%", width }]}>
      <Image
        source={item.image}
        style={[styles.image, { height: "100%", width }]}
      />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />

        <HeightSpacer height={40} />

        <ReusableButton
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Let's go"}
          width={(SIZES.width - 50) / 2.2}
          textColor={COLORS.white}
          backgroundColor={COLORS.red}
          borderWidth={0}
          borderColor={COLORS.red}
        />
      </View>
    </View>
  );
};

export default Slides;
