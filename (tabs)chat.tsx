import { Text, View, StyleSheet } from 'react-native';
export default function Chat() { 
  return <View style={styles.container}><Text style={styles.title}>Chat</Text><Text>Chat 1 kwa 1 inakuja hapa</Text></View> 
}
const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center'},title:{fontSize:22,fontWeight:'bold'}})
