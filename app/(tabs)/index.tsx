import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

const STORIES = [
  { id: 1, name: 'Ongeza', avatar: 'https://i.pravatar.cc/150?u=you' },
  { id: 2, name: 'Daniel', avatar: 'https://i.pravatar.cc/150?u=daniel' },
  { id: 3, name: 'Mama', avatar: 'https://i.pravatar.cc/150?u=mama' },
  { id: 4, name: 'Bro', avatar: 'https://i.pravatar.cc/150?u=bro' },
];

const POSTS = [
  { id: 1, user: 'Daniel', avatar: 'https://i.pravatar.cc/150?u=daniel', text: 'Angalia hii video!', media: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video', likes: 24, liked: false },
  { id: 2, user: 'Mama Tech', avatar: 'https://i.pravatar.cc/150?u=mama', text: 'Picha nzuri ya leo kutoka Dar', media: 'https://picsum.photos/400/300?random=2', type: 'image', likes: 42, liked: false },
];

export default function HomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => { // SKELETON: Inapretend inapakia sekunde 1.5
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleLike = (id) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  if (loading) { // SKELETON LOADING
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Inapakia...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dantech</Text>
        <TouchableOpacity onPress={() => router.push('/search')}><Text style={{fontSize: 24}}>🔍</Text></TouchableOpacity>
      </View>
      
      {/* 1. STORIES */}
      <FlatList
        horizontal
        data={STORIES}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.storyItem}>
            <Image source={{uri: item.avatar}} style={styles.storyAvatar} />
            <Text style={styles.storyName}>{item.name}</Text>
          </View>
        )}
        style={styles.storyList}
      />

      {posts.map(post => (
        <View key={post.id} style={styles.card}>
          <View style={styles.userRow}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{post.user}</Text>
          </View>
          <Text style={styles.postText}>{post.text}</Text>
          <View style={styles.mediaContainer}>
            {post.type === 'video' ? (
              <>
                <Video source={{ uri: post.media }} style={styles.postMedia} useNativeControls resizeMode="cover" />
                <View style={styles.playIcon}><Text style={styles.playIconText}>▶️</Text></View>
              </>
            ) : (
              <TouchableOpacity onPress={() => handleLike(post.id)}> {/* DOUBLE TAP LIKE */}
                <Image source={{ uri: post.media }} style={styles.postMedia} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => handleLike(post.id)}>
              <Text style={{color: post.liked ? 'red' : 'black'}}>❤️ {post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text>💬 Comment</Text></TouchableOpacity>
            <TouchableOpacity><Text>📤 Share</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#fff' },
  headerTitle: { fontSize: 22, fontWeight: 'bold' },
  storyList: { backgroundColor: '#fff', paddingVertical: 10 },
  storyItem: { alignItems: 'center', marginHorizontal: 8 },
  storyAvatar: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#FF0050' },
  storyName: { fontSize: 12, marginTop: 4 },
  card: { backgroundColor: '#fff', marginTop: 10, padding: 15 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: 'bold', fontSize: 16 },
  postText: { fontSize: 15, marginBottom: 10 },
  mediaContainer: { position: 'relative' },
  postMedia: { width: '100%', height: 250, borderRadius: 10, backgroundColor: '#000' },
  playIcon: { position: 'absolute', top: '40%', left: '45%', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 30, padding: 10 },
  playIconText: { fontSize: 30, color: '#fff' },
  actions: { flexDirection: 'row', gap: 20, marginTop: 10 }
});
