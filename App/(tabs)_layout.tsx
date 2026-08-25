import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#E91E63'}}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="circles" options={{ title: 'Circles' }} />
      <Tabs.Screen name="upload" options={{ title: 'Post' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
      }
