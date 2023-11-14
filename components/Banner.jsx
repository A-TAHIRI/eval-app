import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/COLORS";
const img = require("../assets/images/banner.png");

export default function Banner() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imageBackground}>
        {/* Content */}
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Buy Orange 10kg</Text>
          <Text style={styles.text}>Get discount 25%</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    height: 170,
    width: "100%",
    marginTop: 30,
    borderRadius: 8,
    overflow: "hidden",
    // Shadow for Android
    elevation: 5,

    // Shadow for IOS
    shadowColor: COLORS.whiteAlt,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0.6,
      height: 2,
    },
  },
  imageBackground: {
    flex: 1,
    height: "100%",
  },

  innerContainer: {
    transform: [{ rotate: "-9deg" }],
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 0,
    bottom: 10,
    justifyContent: "flex-end",
    alignItems: "start",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.white,
  },
});
