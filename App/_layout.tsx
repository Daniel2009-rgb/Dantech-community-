import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => { AsyncStorage.getItem('userToken').then(t => setIsLoggedIn(!!t)); }, []);
  if (isLoggedIn === null) return <View style={{flex:1,justifyContent:'center'}}><ActivityIndicator size="large"/></View>;
  return <Stack screenOptions={{headerShown:false}}>{isLoggedIn ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="login" />}</Stack>;
}
