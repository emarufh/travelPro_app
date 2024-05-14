import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import {
  HeightSpacer,
  Places,
  ReusableText,
  Recommendations,
} from "../../components";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";

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

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />

        <HeightSpacer height={15} />

        <Recommendations />
      </View>
    </SafeAreaView>
  );
};

export default Home;
