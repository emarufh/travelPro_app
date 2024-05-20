import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ReviewTile from "../Tiles/Reviews/ReviewTile";

const ReviewList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTile review={item} />
        </View>
      )}
    />
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
