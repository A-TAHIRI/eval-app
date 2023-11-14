import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";
import { COLORS } from "../constants/COLORS";
import { AntDesign } from "@expo/vector-icons";
import { urlFor } from "../lib/image.sanity";
import { useRootContext } from "../context/RootContext";
import { useNavigation } from "@react-navigation/native";



export default function FavoriteScreen() {
  const { favorites } = useRootContext();
  const [dishes, setDishes] = useState(undefined);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const onPressHandler = (dish) => navigation.navigate('Detail', dish);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.containerCard}>
        <Text style={styles.title}>My best favorites </Text>
          <FlatList
            data={favorites}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => onPressHandler(item)}
                style={[styles.containerDish, { width: width / 2 - 30 }]}
              >
                 <Image source={{ uri: urlFor(item.image) }} style={styles.image} />
                <View style={styles.containerText}>
                  <Text style={styles.name}>{item.name} </Text>

                  {/* Review and price */}
                  <View style={styles.infoWrap}>
                    <View style={styles.review}>
                      <AntDesign name="star" size={18} color={COLORS.primary} />
                      <Text style={[styles.textInfo, styles.textReview]}>
                        4.0
                      </Text>
                    </View>

                    <Text style={styles.textInfo}>${item.price}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
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
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  containerCard: {
    flex: 2,
    paddingTop: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: COLORS.white,
  },
  separator: {
    marginVertical: 10,
  },
  containerDish: {
    backgroundColor: COLORS.container,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 140,
  },
  containerText: {
    height: 100,
    padding: 8,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "600",
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  textInfo: {
    fontSize: 16,
    color: COLORS.whiteAlt,
  },
  textReview: { marginLeft: 5 },
});
