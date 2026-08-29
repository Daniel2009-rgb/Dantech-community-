import { Tabs } from 'expo-router';
import { Text, useColorScheme } from 'react-native';

export default function TabsLayout() {
  const scheme = useColorScheme(); // Hii inajua simu yako iko Dark au Light

  const isDark = scheme === 'dark';

  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: isDark ? '#121212' : '#fff',
          borderTopColor: isDark ? '#333' : '#eee'
        },
        tabBarActiveTintColor: '#FF0050', // Rangi ya icon inapoactive
        tabBarInactiveTintColor: isDark ? '#aaa' : 'gray',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 22}}>🏠</Text> 
        }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{ 
          title: 'Chat', 
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 22}}>💬</Text> 
        }} 
      />
      <Tabs.Screen 
        name="circle" 
        options={{ 
          title: 'Circle', 
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 22}}>👥</Text> 
        }} 
      />
      <Tabs.Screen 
        name="shorts"
        options={{
          title: 'Shorts',
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 20}}>▶️</Text>,
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile', 
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 22}}>👤</Text> 
        }} 
      />
      {/* TAB MPYA YA 6 */}
      <Tabs.Screen 
        name="notifications" 
        options={{ 
          title: 'Notifs', 
          tabBarIcon: ({ color }) => <Text style={{color, fontSize: 22}}>🔔</Text> 
        }} 
      />
    </Tabs>
  );
        }
