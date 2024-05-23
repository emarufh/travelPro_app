import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
// import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    backgroundColor: COLORS.white,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    paddingLeft: 10,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    // underlineStyle: "transparent",
    // underlineColor: "transparent",
    borderRadius: SIZES.medium,
    marginHorizontal: 2,
  },
  clearBtn: {
    position: "absolute",
    right: 10,
  },
  searchBtn: {
    width: 50,
    height: 50,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },
  searchImage: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 2.2,
    paddingHorizontal: 20,
  },
  tile: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
});

export default styles;
