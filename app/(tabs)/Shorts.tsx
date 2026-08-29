import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const SHORTS = [
  { id: 1, user: 'Daniel', caption: 'Tip ya React Native #1' },
  { id: 2, user: 'Mama Tech', caption: 'Design nzuri ya App' },
  { id: 3, user: 'Bro Code', caption: 'Motivation ya usiku' },
];

export default function ShortsScreen() {
  return (
    <FlatList
      data={SHORTS}
      keyExtractor={item => item.id.toString()}
      pagingEnabled
      renderItem={({ item }) => (
        <View style={styles.container}>
          {/* BADALA YA VIDEO TUTUMIE BACKGROUND TU */}
          <View style={styles.videoPlaceholder}>
            <Text style={styles.playText}>▶️</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.user}>@{item.user}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { height: height, backgroundColor: '#000', justifyContent: 'flex-end' },
  videoPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' },
  playText: { fontSize: 50, color: 'white' },
  footer: { position: 'absolute', bottom: 80, left: 15 },
  user: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  caption: { color: '#fff', fontSize: 14, marginTop: 5 }
});
