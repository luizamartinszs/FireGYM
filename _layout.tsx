import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="onboarding1" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding2" options={{ headerShown: false }} />  {/* ✅ adicionado */}
      </Stack>
      <StatusBar style="light" />
    </>
  );
}