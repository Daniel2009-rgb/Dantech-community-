import { Text, View, StyleSheet } from 'react-native';
export default function Circles() { 
  return <View style={styles.container}><Text style={styles.title}>Dantech Circles</Text><Text>Tengeneza Group/Duka lako hapa. Kama WhatsApp + FB Groups</Text></View> 
}
const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},title:{fontSize:22,fontWeight:'bold',marginBottom:10}})
