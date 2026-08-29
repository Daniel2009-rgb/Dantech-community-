import { View, Text, FlatList, StyleSheet } from 'react-native';
const NOTIFS = [
  {id: 1, text: 'Daniel alikupenda post yako'},
  {id: 2, text: 'Mama Tech amekommenti'},
]
export default function NotificationsScreen() {
  return (
    <FlatList
      data={NOTIFS}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <View style={styles.item}><Text>{item.text}</Text></View>}
    />
  )
}
const styles = StyleSheet.create({ item: {padding: 15, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fff'} })
