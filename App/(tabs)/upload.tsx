import * as ImagePicker from 'expo-image-picker';
import { View, Button, Text, StyleSheet } from 'react-native';
export default function Upload() {
  const pick = async () => {
    let r = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.All});
    if (!r.canceled) alert('Imewekwa! Baadaye tunaiweka online');
  };
  return <View style={styles.container}><Text style={styles.title}>Tuma Video/Picha</Text><Button title="Chagua kutoka Gallery" onPress={pick} /></View>;
}
const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center'},title:{fontSize:20,fontWeight:'bold',marginBottom:20}})
