import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CHATS = [
  { id: 1, name: 'Mama Tech', lastMsg: 'Umeona post yangu?', time: '2m', avatar: 'https://i.pravatar.cc/150?u=mama', unread: 2 },
  { id: 2, name: 'Bro Code', lastMsg: 'Tukutane kesho', time: '1h', avatar: 'https://i.pravatar.cc/150?u=bro', unread: 0 },
  { id: 3, name: 'Auntie Dev', lastMsg: 'Asante kwa msaada', time: 'Jana', avatar: 'https://i.pravatar.cc/150?u=auntie', unread: 1 },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ujumbe</Text>
      <FlatList
        data={CHATS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMsg} numberOfLines={1}>{item.lastMsg}</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.time}>{item.time}</Text>
              {item.unread > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.unread}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 15 },
  chatRow: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#f0f0f0', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  chatInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  lastMsg: { fontSize: 14, color: 'gray', marginTop: 2 },
  rightSide: { alignItems: 'flex-end' },
  time: { fontSize: 12, color: 'gray' },
  badge: { backgroundColor: '#007AFF', borderRadius: 10, paddingHorizontal: 6, paddingVertical: 2, marginTop: 4 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' }
});
