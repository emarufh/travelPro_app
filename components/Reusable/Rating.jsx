import React from "react";
import { View } from "react-native";
import reusable from "./reusable.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import { ReusableText } from "../../components";

const Rating = ({ rating }) => {
  return (
    <View style={reusable.rowWidthSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color={"#FD9942"} />

      <WidthSpacer width={5} />

      <ReusableText
        text={rating}
        family={"medium"}
        size={15}
        color={"#FD9942"}
      />
    </View>
  );
};

export default Rating;
