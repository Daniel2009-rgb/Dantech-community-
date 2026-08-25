import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [step, setStep] = useState('login');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const DANTECH_PHONE = '0738221562';
  const DANTECH_OTP = '123456';

  const sendOTP = () => {
    if(phone === DANTECH_PHONE) {
      Alert.alert('OTP yako', DANTECH_OTP);
      setStep('otp');
    } else {
      Alert.alert('Makosa', 'Tumia namba: 0738221562');
    }
  }

  const verifyOTP = () => {
    if(otp === DANTECH_OTP) { 
      setStep('home'); 
    } else { 
      Alert.alert('Makosa', 'OTP si sahihi'); 
    }
  }

  if(step === 'login') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DANTECH COMMUNITY</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Weka 0738221562" 
          value={phone} 
          onChangeText={setPhone} 
          keyboardType="phone-pad" 
        />
        <Button title="Tuma OTP" onPress={sendOTP} />
      </View>
    );
  }

  if(step === 'otp') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thibitisha OTP</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Weka 123456" 
          value={otp} 
          onChangeText={setOtp} 
          keyboardType="numeric" 
        />
        <Button title="Ingia" onPress={verifyOTP} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karibu DANTECH!</Text>
      <Text style={styles.subtitle}>Umefanikiwa kuingia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  subtitle: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: 'gray' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    marginVertical: 10, 
    borderRadius: 8 
  }
});