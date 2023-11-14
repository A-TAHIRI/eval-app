import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function DetailScreen({ route, navigation }) {
  const category = route.params;
  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        {/* Go back */}
        <Pressable onPress={goBack} style={styles.goBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={category.products}
          extraData={(item, index) => index}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
          s
          renderItem={({ item, index }) => (
            <View style={styles.containerProduct}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.infoProduit}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.stock}> 1000 ready stock</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View>
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 70 : 0,
  },
  containerProduct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
    resizeMode: "contain",
  },
  goBack: {
    position: "absolute",
    top: 25,
    left: 10,
    zIndex: 10,
  },
  infoProduit: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
