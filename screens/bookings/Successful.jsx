import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import ReusableText from "../../components/Reusable/ReusableText";
import ReusableTile from "../../components/Reusable/ReusableTile";
import ReusableButton from "../../components/Reusable/ReusableButton";
import { COLORS, SIZES, TEXT } from "../../constants/theme";

const Successful = ({ navigation }) => {
  const hotel = {
    _id: "64c674d23cfa5e847bcd5430",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Seaside Resort",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
    rating: 4.9,
    review: "1204 Reviews",
    location: "Miami Beach, FL",
  };

  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        <Image
          source={require("../../assets/images/checked.png")}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />

        <HeightSpacer height={40} />

        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successful"}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={20} />

          <ReusableText
            text={"You can find your booking details below"}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />

          <HeightSpacer height={20} />
        </View>

        <View style={{ margin: 20 }}>
          <ReusableText
            text={"Room Details"}
            family={"bold"}
            size={TEXT.medium}
            color={COLORS.dark}
          />

          <HeightSpacer height={20} />

          <ReusableTile item={hotel} />

          <HeightSpacer height={40} />

          <ReusableButton
            onPress={() => navigation.navigate("Bottom")}
            btnText={"Done"}
            width={SIZES.width - 40}
            textColor={COLORS.white}
            backgroundColor={COLORS.green}
            borderWidth={0}
            borderColor={COLORS.green}
          />
        </View>
      </View>
    </View>
  );
};

export default Successful;

const styles = StyleSheet.create({});
