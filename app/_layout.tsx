import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";

export default function RootLayout() {

  useFonts({
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'poppins-extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-black': require('../assets/fonts/Poppins-Black.ttf'),
    'poppins-extralight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)/home/index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)/dashboard/index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)/ai/index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)/profile/index" options={{headerShown: false}} /> 
    </Stack>
  )
}
