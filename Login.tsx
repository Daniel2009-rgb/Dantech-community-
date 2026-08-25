import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
export default function Login() {
  const [phone, setPhone] = useState(''); const [otp, setOtp] = useState(''); const [step, setStep] = useState(1); const router = useRouter();
  const sendOTP = () => { alert(`OTP ni 1234`); setStep(2); }
  const verifyOTP = async () => { if(otp === '1234'){ await AsyncStorage.setItem('userToken', phone); router.replace('(tabs)'); } else alert('OTP sio sahihi') }
  return(<View style={styles.container}><Text style={styles.title}>Dantech Community</Text>{step===1?<><TextInput placeholder="Ingiza Namba" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad"/><Button title="Tuma OTP" onPress={sendOTP}/></>:<><TextInput placeholder="Ingiza OTP: 1234" value={otp} onChangeText={setOtp} style={styles.input} keyboardType="numeric"/><Button title="Ingia" onPress={verifyOTP}/></>}</View>)
}
const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',padding:20,backgroundColor:'#fff'},title:{fontSize:28,fontWeight:'bold',textAlign:'center',marginBottom:30,color:'#E91E63'},input:{borderWidth:1,padding:15,marginBottom:15,borderRadius:10,borderColor:'#ddd'}})
