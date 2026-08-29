import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

const DUMMY_USERS = [
  { id: 1, name: 'Daniel Tech' },
  { id: 2, name: 'Mama Code' },
  { id: 3, name: 'Bro Dev' },
  { id: 4, name: 'Auntie UI' },
  { id: 5, name: 'React Native TZ' },
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filtered = DUMMY_USERS.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Tafuta watu, groups..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  searchBar: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 10, fontSize: 16, marginBottom: 15 },
  result: { padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontSize: 16, fontWeight: '500' }
});
