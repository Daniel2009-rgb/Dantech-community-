import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CIRCLES = [
  { id: 1, name: 'React Native TZ', members: '2.4k', desc: 'Tujifunze RN pamoja', image: 'https://picsum.photos/100/100?random=20' },
  { id: 2, name: 'Dantech Developers', members: '1.1k', desc: 'Team yetu rasmi', image: 'https://picsum.photos/100/100?random=21' },
  { id: 3, name: 'Designers Hub', members: '3.8k', desc: 'UI/UX na Graphics', image: 'https://picsum.photos/100/100?random=22' },
  { id: 4, name: 'Startup Founders', members: '900', desc: 'Tujenge biashara', image: 'https://picsum.photos/100/100?random=23' },
];

export default function CircleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vikundi</Text>
      <FlatList
        data={CIRCLES}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.circleCard}>
            <Image source={{ uri: item.image }} style={styles.circleImage} />
            <View style={styles.circleInfo}>
              <Text style={styles.circleName}>{item.name}</Text>
              <Text style={styles.circleDesc}>{item.desc}</Text>
              <Text style={styles.members}>{item.members} members</Text>
            </View>
            <TouchableOpacity style={styles.joinBtn}>
              <Text style={styles.joinText}>Jiunge</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 15, backgroundColor: '#fff' },
  circleCard: { backgroundColor: '#fff', flexDirection: 'row', padding: 15, marginBottom: 10, alignItems: 'center' },
  circleImage: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  circleInfo: { flex: 1 },
  circleName: { fontSize: 16, fontWeight: 'bold' },
  circleDesc: { fontSize: 14, color: 'gray' },
  members: { fontSize: 12, color: '#007AFF', marginTop: 4 },
  joinBtn: { backgroundColor: '#007AFF', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15 },
  joinText: { color: '#fff', fontWeight: 'bold' }
});
