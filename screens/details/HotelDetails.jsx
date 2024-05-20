import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Rating } from "react-native-stock-star-rating";
import { Feather } from "@expo/vector-icons";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import DescriptionText from "../../components/Reusable/DescriptionText";
import HotelMap from "../../components/Hotel/HotelMap";
import reusable from "../../components/Reusable/reusable.style";
import styles from "./hotelDetails.style";
import ReviewList from "../../components/Hotel/ReviewList";
import ReusableButton from "../../components/Reusable/ReusableButton";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    _id: "64d34be53295a816648298d0",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Hotel Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.7,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 1,
    reviews: [
      {
        _id: "64d38ff59af9119acfab0ece",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime magni obcaecati error dignissimos sequi, totam quas incidunt, soluta possimus cupiditate ipsum, assumenda dolorem veniam quae illum numquam alias ipsam.",
        rating: 4.6,
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          username: "John Doe",
          profile: "",
        },
        updatedAt: "2023-08-09T13:09:09.200Z",
      },
      {
        _id: "64d0b5a4d3cb4985a76ac1aa",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime magni obcaecati error dignissimos sequi, totam quas incidunt, soluta possimus cupiditate ipsum, assumenda dolorem veniam quae illum numquam alias ipsam.",
        rating: 4.7,
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          username: "John Doe",
          profile: "",
        },
        updatedAt: "2023-08-09T13:09:09.200Z",
      },
    ],
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={hotel.title}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          top={50}
          left={20}
          right={20}
        />
      </View>

      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={220}
          radius={25}
        />

        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
              text={hotel.title}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />

            <HeightSpacer height={10} />

            <ReusableText
              text={hotel.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={6} />

            <View style={reusable.rowWidthSpace("space-between")}>
              <Rating
                maxStars={5}
                stars={hotel.rating}
                bordered={false}
                color={"#FD9942"}
              />

              <ReusableText
                text={`(${hotel.review})`}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWidthSpace("space-between")}>
            <ReusableText
              text={"Reviews"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewList reviews={hotel.reviews} />
        </View>

        <View style={[reusable.rowWidthSpace("space-between"), styles.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <HeightSpacer height={5} />

            <ReusableText
              text={"Jan 01 - Dec 25"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReusableButton
            onPress={() => navigation.navigate("SelectRoom")}
            btnText={"Select Room"}
            width={(SIZES.width - 50) / 2.2}
            textColor={COLORS.white}
            backgroundColor={COLORS.green}
            borderWidth={0}
            borderColor={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;
