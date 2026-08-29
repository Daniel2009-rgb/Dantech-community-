import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const POSTS = [
  {
    id: 1,
    user: 'Daniel',
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    text: 'Karibu Dantech Community! App yetu ya kwanza imekamilika 🎉',
    image: 'https://picsum.photos/400/300?random=1',
    likes: 24
  },
  {
    id: 2,
    user: 'Mama Tech',
    avatar: 'https://i.pravatar.cc/150?u=mama',
    text: 'Nimejifunza React Native leo. Ni rahisi kuliko nilivyofikiri!',
    image: 'https://picsum.photos/400/300?random=2',
    likes: 42
  },
  {
    id: 3,
    user: 'Bro Code',
    avatar: 'https://i.pravatar.cc/150?u=bro',
    text: 'Tukutane hackathon wiki ijayo. Nani anakuja?',
    image: 'https://picsum.photos/400/300?random=3',
    likes: 18
  }
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dantech Feed</Text>
      
      {POSTS.map(post => (
        <View key={post.id} style={styles.card}>
          <View style={styles.userRow}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{post.user}</Text>
          </View>

          <Text style={styles.postText}>{post.text}</Text>

          <Image source={{ uri: post.image }} style={styles.postImage} />

          <View style={styles.actions}>
            <TouchableOpacity>
              <Text>❤️ {post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>💬 Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { fontSize: 22, fontWeight: 'bold', padding: 15, backgroundColor: '#fff' },
  card: { backgroundColor: '#fff', marginBottom: 10, padding: 15 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: 'bold', fontSize: 16 },
  postText: { fontSize: 15, marginBottom: 10 },
  postImage: { width: '100%', height: 250, borderRadius: 10, marginBottom: 10 },
  actions: { flexDirection: 'row', gap: 20 }
});
