import { Text, View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
export default function Profile() { 
  const router = useRouter();
  const logout = async () => { await AsyncStorage.removeItem('userToken'); router.replace('/login'); }
  return <View style={styles.container}><Text style={styles.title}>Profile Yangu</Text><Button title="Toka" onPress={logout} color="red"/></View> 
}
const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center'},title:{fontSize:22,fontWeight:'bold',marginBottom:20}})
