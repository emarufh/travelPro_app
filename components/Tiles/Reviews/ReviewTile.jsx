import React from "react";
import { View } from "react-native";
import styles from "./review.style";
import reusable from "../../Reusable/reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import Rating from "../../Reusable/Rating";
import DescriptionText from "../../Reusable/DescriptionText";
import { COLORS, SIZES } from "../../../constants/theme";

const ReviewTile = ({ review }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  };

  const formattedDate = formatDate(review.updatedAt);

  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWidthSpace("space-between")}>
        <View style={reusable.rowWidthSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={12} />

          <View style={{ width: "80%" }}>
            <View style={reusable.rowWidthSpace("space-between")}>
              <ReusableText
                text={review.user.username}
                family={"bold"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />

              {/* <WidthSpacer width={"10%"} /> */}

              <View style={reusable.rowWidthSpace("space-between")}>
                <Rating rating={review.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={formattedDate}
                  family={"medium"}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                />
              </View>
            </View>

            <DescriptionText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTile;
