import { View, Text, StyleSheet } from 'react-native';
export default function Circle() {
  return <View style={styles.container}><Text>Circle Screen</Text></View>;
}
const styles = StyleSheet.create({container: { flex: 1, justifyContent: 'center', alignItems: 'center' }});
