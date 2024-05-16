import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReusableTile from "../../components/Reusable/ReusableTile";

const PopularList = ({ data }) => {
  console.log(data);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReusableTile
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item._id)}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PopularList;

const styles = StyleSheet.create({});
