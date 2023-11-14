import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/COLORS";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ImageBackround = require("../assets/images/overview.png");


export default function App() {
  const navigation = useNavigation(); const goNext = async function () {
    try {
      await AsyncStorage.setItem("alreadyLaunched", "true");
      navigation.push("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image source={ImageBackround} style={styles.image} />
      </View>

      <View style={styles.startContainer}>
        <Text style={styles.startText}>Complete your grocery need easily</Text>
        <Pressable 
        
          onPress={goNext} style={styles.pressable}>
          <Text style={styles.started}>Get started</Text>
          <AntDesign
            name="arrowright"
            size={20}
            color={COLORS.white}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  ImageContainer: {
    flex: 1,
    borderBottomRightRadius: 200 / 2,
    borderBottomLeftRadius: 200 / 2,
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  startContainer: {
    flex: 0.5,
    justifyContent: "start",
    alignItems: "center",
    paddingHorizontal: 80,
    marginTop: 30,
  },
  startText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.secondary,
    textAlign: "center",
  },
  pressable: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    backgroundColor: COLORS.Grenn,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  started: {
    fontSize: 15,
    fontWeight: "400",
    color: COLORS.white,
    textAlign: "center",
  },
});
