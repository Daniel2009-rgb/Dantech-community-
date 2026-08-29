import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { height } = Dimensions.get('window');

const SHORTS = [
  { id: 1, user: 'Daniel', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', caption: 'Discipline = Success #motivation' },
  { id: 2, user: 'Mama Tech', video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', caption: 'Jifunze React Native leo!' },
];

export default function ShortsScreen() {
  return (
    <FlatList
      data={SHORTS}
      keyExtractor={item => item.id.toString()}
      pagingEnabled // Hii inafanya i-scroll kama TikTok
      renderItem={({ item }) => (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: item.video }}
            style={styles.video}
            resizeMode="cover"
            isLooping
            shouldPlay
          />
          <View style={styles.overlay}>
            <Text style={styles.user}>@{item.user}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  videoContainer: { width: '100%', height: height - 80 }, // -80 kwa ajili ya tab bar
  video: { width: '100%', height: '100%' },
  overlay: { position: 'absolute', bottom: 20, left: 15 },
  user: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  caption: { color: '#fff', fontSize: 14, marginTop: 5 }
});
