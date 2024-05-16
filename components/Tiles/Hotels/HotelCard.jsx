import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import HeightSpacer from "../../Reusable/HeightSpacer";
import ReusableText from "../../Reusable/ReusableText";
import NetworkImage from "../../Reusable/NetworkImage";
// import NetworkImage from "../../Reusable/NetworkImage";
import Rating from "../../Reusable/Rating";
import { Image } from "react-native";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View style={styles.imageContainer}>
        <NetworkImage
          source={item.imageUrl}
          height={"100%"}
          width={"90%"}
          radius={16}
        />
      </View>

      {/* <HeightSpacer height={2} /> */}

      <View style={{ padding: 10 }}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.location}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.gray}
        />

        <HeightSpacer height={5} />

        <Rating rating={item.rating} />
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 270,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: "center",
    margin: 10,
    height: 150,
  },
});
