// FILE IMEZIMWA KWA MUDA KWA SABABU YA BUILD
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Login() {
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Dantech Community</Text>
//       <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
//         <Text style={styles.buttonText}>Ingia</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
//   button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, width: '80%' },
//   buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }
// });

import { View, Text } from 'react-native';
export default function Login() {
  return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Login Imezimwa</Text></View>;
}
