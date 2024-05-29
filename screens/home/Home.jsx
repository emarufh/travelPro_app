import React from "react";
import { TouchableOpacity, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import reusable from "../../components/Reusable/reusable.style";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import ReusableText from "../../components/Reusable/ReusableText";
import Places from "../../components/Home/Places";
import Recommendations from "../../components/Home/Recommendations";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWidthSpace("space-between")}>
          <ReusableText
            text={"Hey User!"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.large} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />

        <HeightSpacer height={Platform.OS === "android" ? 10 : 15} />

        <Recommendations />

        <HeightSpacer height={Platform.OS === "android" ? 20 : 30} />

        <BestHotels />
      </View>
    </SafeAreaView>
  );
};

export default Home;
