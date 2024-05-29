import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableText from "./ReusableText";
import reusable from "./reusable.style";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <View style={reusable.rowWidthSpace("flex-start")}>
      <AntDesign
        name="minussquareo"
        size={26}
        color={COLORS.gray}
        onPress={decrement}
      />

      <ReusableText
        text={`  ${count}  `}
        family={"regular"}
        size={SIZES.medium}
        color={COLORS.black}
      />

      <AntDesign
        name="plussquareo"
        size={26}
        color={COLORS.gray}
        onPress={increment}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
