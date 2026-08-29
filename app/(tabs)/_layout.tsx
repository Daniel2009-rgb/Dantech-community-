import { Tabs } from 'expo-router';
import { Text } from 'react-native'; // ONGEZA HII JUU

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
      <Tabs.Screen name="circle" options={{ title: 'Circle' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      
      <Tabs.Screen 
        name="shorts"
        options={{
          title: 'Shorts',
          tabBarIcon: ({ color }) => <Text style={{fontSize: 20}}>▶️</Text>,
        }}
      /> {/* HII NDIO MWISHO WA SHORTS */}

    </Tabs>
  );
}
