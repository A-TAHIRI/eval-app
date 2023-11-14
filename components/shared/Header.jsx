import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/COLORS';


const avatar = require("../../assets/images/avatar.png");
export default function Header() {

  return (
    <View style={styles.container}>
      {/* Left side */}
      <View style={styles.leftContainer}>
        <View style={styles.leftInnerContainer}>
       
            <Text style={styles.location}>
            Your Balance
            </Text>
         
          <Text style={styles.name}>$1,700.00</Text>
        </View>
      </View>

      {/* Right side */}
      <Image
        style={styles.avatar}

        source={avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftInnerContainer: {
    marginLeft: 10,
  },
  location: {
    color: COLORS.secondary,
    fontSize: 15,
  },
  name: {
    color: COLORS.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor:COLORS.primary,
    opacity:0.4,
    borderWidth: 3,
    borderRadius: 60 / 2,
  },
});
