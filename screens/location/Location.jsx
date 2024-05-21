import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const coordinates = {
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
    title: "My Location",
  };

  return (
    <SafeAreaView style={reusable.container}>
      <MapView initialRegion={coordinates} style={styles.mapStyle}>
        <Marker coordinate={coordinates} title={coordinates.title} />
      </MapView>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});
