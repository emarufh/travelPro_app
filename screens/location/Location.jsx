import { Text, View } from "react-native";
import React from "react";
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
