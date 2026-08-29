import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function ProfileScreen() {
  const [posts, setPosts] = useState([
    { id: 1, type: 'image', url: 'https://picsum.photos/400/400?random=10', caption: 'Project yangu mpya 💻' },
    { id: 2, type: 'image', url: 'https://picsum.photos/400/400?random=11', caption: 'Tutorial ya React' },
    { id: 3, type: 'image', url: 'https://picsum.photos/400/400?random=12', caption: 'Team work' },
  ]);

  // Function ya kuchagua picha/video
  const pickMedia = async () => {
    // Omba ruhusa
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status!== 'granted') {
      Alert.alert('Ruhusa inahitajika', 'Tafadhali ruhusu kufikia gallery');
      return;
    }

    // Fungua gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // All = Picha + Video
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newPost = {
        id: posts.length + 1,
        type: result.assets[0].type, // 'image' au 'video'
        url: result.assets[0].uri,
        caption: 'Post mpya'
      };
      setPosts([newPost,...posts]); // Ongeza juu kabisa
      Alert.alert('Hongera!', 'Post imeongezwa');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Sehemu ya Juu - Profile Info */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pravatar.cc/150?u=daniel' }} style={styles.profilePic} />
        <Text style={styles.name}>Daniel</Text>
        <Text style={styles.bio}>Founder wa Dantech Community</Text>

        {/* BUTTON YA KUPOST */}
        <TouchableOpacity style={styles.postButton} onPress={pickMedia}>
          <Text style={styles.postButtonText}>+ Post Picha / Video</Text>
        </TouchableOpacity>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNum}>{posts.length}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>1.2k</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>300</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      {/* Grid ya Posts */}
      <Text style={styles.sectionTitle}>Posts Zangu</Text>
      <View style={styles.grid}>
        {posts.map(post => (
          <TouchableOpacity key={post.id} style={styles.gridItem}>
            <Image source={{ uri: post.url }} style={styles.gridImage} />
            {post.type === 'video' && (
              <View style={styles.videoIcon}>
                <Text style={{color: 'white', fontSize: 20}}>▶️</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#eee' },
  profilePic: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  bio: { fontSize: 14, color: 'gray', marginBottom: 15 },
  postButton: { 
    backgroundColor: '#007AFF', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 20, 
    marginBottom: 15 
  },
  postButtonText: { color: '#fff', fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', gap: 30 },
  stat: { alignItems: 'center' },
  statNum: { fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', padding: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: { width: '33.33%', height: 130, position: 'relative' },
  gridImage: { width: '100%', height: '100%' },
  videoIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 }
});
