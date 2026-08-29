import { Tabs } from 'expo-router';
import { Text } from 'react-native'; // HII NI MUHIMU SANA

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Home', tabBarIcon: ({ color }) => <Text>🏠</Text> }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{ title: 'Chat', tabBarIcon: ({ color }) => <Text>💬</Text> }} 
      />
      <Tabs.Screen 
        name="circle" 
        options={{ title: 'Circle', tabBarIcon: ({ color }) => <Text>👥</Text> }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: 'Profile', tabBarIcon: ({ color }) => <Text>👤</Text> }} 
      />
      <Tabs.Screen 
        name="shorts"
        options={{
          title: 'Shorts',
          tabBarIcon: ({ color }) => <Text style={{fontSize: 20}}>▶️</Text>,
        }}
      />
    </Tabs>
  );
}
