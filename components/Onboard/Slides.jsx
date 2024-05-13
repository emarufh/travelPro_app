import { Image, View } from "react-native";
import React from "react";
import styles from "./slides.style";
import { HeightSpacer, ReusableButton, ReusableText } from "../index";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

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
