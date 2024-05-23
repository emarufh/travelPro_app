import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.black,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height,
    resizeMode: "cover",
  },
  stack: {
    position: "absolute",
    bottom: 60,
    // marginBottom: 60,
    // bottom: 0,
    marginHorizontal: 20,
  },
});

export default styles;
