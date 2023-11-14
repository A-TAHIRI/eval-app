// RNFS
import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";

import Header from "../components/shared/Header";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import ListDishes from "../components/ListDishes";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Banner />
        <CategoryList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
