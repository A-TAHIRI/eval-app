
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    const [alreadyLaunched, setAlreadyLaunched] = useState(false)

    useEffect(() => {
      (async function () {
        const data = await AsyncStorage.getItem('alreadyLaunched');
        if (data) {
          setAlreadyLaunched(true);
        }
      })();
    }, []);

    console.log(alreadyLaunched);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {alreadyLaunched
        ? undefined
        : (
          <Stack.Screen 
            name="onBoarding"
            options= {{ headerShown: false}}
            component={OnBoardingScreen}
          />
        )}

        <Stack.Screen 
          name="Home"
          options= {{ headerShown: false}}
          component={HomeScreen}
        />

        <Stack.Screen 
            name="Detail"
            options= {{ headerShown: false}}
            component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}