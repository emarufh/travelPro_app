import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import ReusableText from "../../components/Reusable/ReusableText";
import NetworkImage from "../../components/Reusable/NetworkImage";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import Rating from "../../components/Reusable/Rating";
import WidthSpacer from "../../components/Reusable/WidthSpacer";
import Counter from "../../components/Reusable/Counter";
import ReusableButton from "../../components/Reusable/ReusableButton";
import AssetImage from "../../components/Reusable/AssetImage";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  //   console.log("Items: ", item);

  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
          top={55}
          left={Platform.OS === "android" ? 15 : 10}
          right={Platform.OS === "android" ? 15 : 10}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWidthSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWidthSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            />

            <ReusableText
              text={"Room Requirements"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={30} />

            <View style={reusable.rowWidthSpace("space-between")}>
              <ReusableText
                text={"Price Per Night"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={"$ 400"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWidthSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              {/* <ReusableText
                text={"Stripe"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              /> */}

              <View style={reusable.rowWidthSpace("flex-start")}>
                <AssetImage
                  data={require("../../assets/images/Visa.png")}
                  mode={"contain"}
                  width={30}
                  height={20}
                />

                <ReusableText
                  text={"Visa"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={15} />

            <View style={reusable.rowWidthSpace("space-between")}>
              <ReusableText
                text={"4 Guests"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>
            <HeightSpacer height={30} />

            <ReusableButton
              onPress={() => navigation.navigate("Success")}
              btnText={"Book Now"}
              width={SIZES.width - 50}
              textColor={COLORS.white}
              backgroundColor={COLORS.green}
              borderWidth={0}
              borderColor={COLORS.white}
            />

            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
