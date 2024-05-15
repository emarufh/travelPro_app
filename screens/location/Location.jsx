import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";

const Location = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <Text>Location</Text>
    </SafeAreaView>
  );
};

export default Location;
