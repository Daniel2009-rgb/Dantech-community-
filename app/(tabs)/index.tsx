import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router'; // 1. Kwa ajili ya Search

const POSTS = [
  {
    id: 1,
    user: 'Daniel',
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    text: 'Angalia hii video ya React Native!',
    media: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video',
    likes: 24
  },
  {
    id: 2,
    user: 'Mama Tech',
    avatar: 'https://i.pravatar.cc/150?u=mama',
    text: 'Picha nzuri ya leo kutoka Dar',
    media: 'https://picsum.photos/400/300?random=2',
    type: 'image',
    likes: 42
  },
  {
    id: 3,
    user: 'Bro Code',
    avatar: 'https://i.pravatar.cc/150?u=bro',
    text: 'Discipline is the key to success 🔥',
    media: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    type: 'video',
    likes: 128
  }
];

export default function HomeScreen() {
  const router = useRouter(); // 2. Kwa ajili ya Search

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER MPYA IKO NA SEARCH */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dantech Feed</Text>
        <TouchableOpacity onPress={() => router.push('/search')}>
          <Text style={{fontSize: 24}}>🔍</Text>
        </TouchableOpacity>
      </View>
      
      {POSTS.map(post => (
        <View key={post.id} style={styles.card}>
          <View style={styles.userRow}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <Text style={styles.username}>{post.user}</Text>
          </View>

          <Text style={styles.postText}>{post.text}</Text>

          {/* CONTAINER YA VIDEO/PICHA */}
          <View style={styles.mediaContainer}>
            {post.type === 'video' ? (
              <>
                <Video
                  source={{ uri: post.media }}
                  style={styles.postMedia}
                  useNativeControls
                  resizeMode="cover"
                />
                {/* ALAMA YA PEMBE TATU */}
                <View style={styles.playIcon}>
                  <Text style={styles.playIconText}>▶️</Text>
                </View>
              </>
            ) : (
              <Image source={{ uri: post.media }} style={styles.postMedia} />
            )}
          </View>

          <View style={styles.actions}>
            <TouchableOpacity><Text>❤️ {post.likes}</Text></TouchableOpacity>
            <TouchableOpacity><Text>💬 Comment</Text></TouchableOpacity>
            <TouchableOpacity
