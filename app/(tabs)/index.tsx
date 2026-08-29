import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

// DATA YA MFANO - BAADAYE ITATOKA SUPABASE
const DUMMY_POSTS = [
  {
    id: 1,
    username: 'Daniel Tech',
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    text: 'Karibu Dantech App! Hii ni post ya kwanza 🔥',
    media: 'https://picsum.photos/400/300?random=1',
    type: 'image',
    likes: 25,
  },
  {
    id: 2,
    username: 'Mama Code',
    avatar: 'https://i.pravatar.cc/150?u=mama',
    text: 'Angalia design mpya ya app yetu',
    media: 'https://picsum.photos/400/500?random=2',
    type: 'video', // Hii itaonyesha picha placeholder kwa sasa
    likes: 120,
  },
  {
    id: 3,
    username: 'Bro Dev',
    avatar: 'https://i.pravatar.cc/150?u=bro',
    text: 'React Native ni rahisi sana mkuu',
    media: 'https://picsum.photos/400/300?random=3',
    type: 'image',
    likes: 67,
  },
];

const DUMMY_STORIES = [
  { id: 1, name: 'Wewe', avatar: 'https://i.pravatar.cc/150?u=you' },
  { id: 2, name: 'Asha', avatar: 'https://i.pravatar.cc/150?u=asha' },
  { id: 3, name: 'Juma', avatar: 'https://i.pravatar.cc/150?u=juma' },
  { id: 4, name: 'Amina', avatar: 'https://i.pravatar.cc/150?u=amina' },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  const handleLike = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <View style={styles.container}>
      {/* STORIES */}
      <FlatList
        data={DUMMY_STORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
            <Text style={styles.storyName}>{item.name}</Text>
          </View>
        )}
        style={styles.storyList}
      />

      {/* POSTS */}
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: post }) => (
          <View style={styles.card}>
            {/* USER ROW */}
            <View style={styles.userRow}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <Text style={styles.username}>{post.username}</Text>
            </View>

            {/* POST TEXT */}
            <Text style={styles.postText}>{post.text}</Text>

            {/* MEDIA - HAPA NDIO TUMEONDOA VIDEO */}
            <View style={styles.mediaContainer}>
              {post.type === 'video' ? (
                // BADALA YA VIDEO TUMEWEKA PICHA YA PLACEHOLDER
                <Image 
                  source={{ uri: 'https://picsum.photos/400/250?random=video' }} 
                  style={styles.postMedia} 
                />
              ) : (
                <TouchableOpacity onPress={() => {}}>
                  <Image source={{ uri: post.media }} style={styles.postMedia} />
                </TouchableOpacity>
              )}
            </View>

            {/* ACTIONS */}
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleLike(post.id)}>
                <Text style={styles.actionText}>❤️ {post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.actionText}>💬 Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  // STORIES
  storyList: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  storyItem: { alignItems: 'center', marginHorizontal: 8 },
  storyAvatar: { width: 65, height: 65, borderRadius: 35, borderWidth: 2, borderColor: '#FF0050' },
  storyName: { fontSize: 12, marginTop: 4 },

  // POSTS
  card: { marginBottom: 15, backgroundColor: '#fff' },
  userRow: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: 'bold', fontSize: 15 },
  postText: { paddingHorizontal: 10, paddingBottom: 10, fontSize: 14 },
  mediaContainer: { width: width, height: 400 },
  postMedia: { width: '100%', height: '100%' },
  
  // ACTIONS
  actions: { flexDirection: 'row', padding: 10, gap: 20 },
  actionText: { fontSize: 16 }
});
