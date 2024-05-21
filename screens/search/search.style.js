import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

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
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: 47,
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginHorizontal: 2,
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
