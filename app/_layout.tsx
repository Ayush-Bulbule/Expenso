import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
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
