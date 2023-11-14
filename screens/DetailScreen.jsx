
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";



export default function DetailScreen({ route, navigation }) {
  const products = route.params;

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <FlatList
          data={products}
          extraData={(item, index) => index}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
          renderItem={({ item, index }) => (
            <View style={styles.containerProduct}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.name}>
                <Text>{item.name}</Text>
                <Text> 1000 ready stock</Text>
                <Text>${item.price}</Text>
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
  },
  containerProduct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
    marginRight: 16,
  },
  goBack: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
  },
});
