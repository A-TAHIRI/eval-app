import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../constants/COLORS";
import { useNavigation } from '@react-navigation/native';
import data from "../assets/data.js";

export default function CategoryList() {
  const { width } = useWindowDimensions();
 
  const navigation = useNavigation();

  
  const onPressHandler = (category) => navigation.push('Detail', category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>For you</Text>
      <View style={styles.cardContainer}>
        {data?.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => onPressHandler(item)}
            style={[styles.containerCategory, { width: width / 2 - 80 }]}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.category}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 2 },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 20,
   
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 40,
    color: COLORS.secondary,
  },

  containerCategory: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
    paddingTop: 8,
    alignItems: "center",
  },
});
