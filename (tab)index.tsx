import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const DATA = [
  {id:'1', user:'@dantech', caption:'Karibu Dantech Community 🔥', likes:120, comments:['Poa sana!']},
  {id:'2', user:'@mshabiki', caption:'App yetu itabomowa', likes:340, comments:[]},
];

export default function Feed() {
  const [posts, setPosts] = useState(DATA);
  const [comment, setComment] = useState('');
  
  const likePost = (id) => setPosts(posts.map(p => p.id===id ? {...p, likes:p.likes+1} : p));
  
  return(
    <FlatList data={posts} keyExtractor={i=>i.id} renderItem={({item})=>(
      <View style={styles.post}>
        <Text style={styles.user}>{item.user}</Text>
        <View style={styles.videoBox}><Text style={styles.videoText}>VIDEO {item.id}</Text></View>
        <Text>{item.caption}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={()=>likePost(item.id)}><Text>❤️ {item.likes}</Text></TouchableOpacity>
          <Text>💬 {item.comments.length}</Text>
        </View>
      </View>
    )}/>
  )
}
const styles = StyleSheet.create({post:{padding:15,borderBottomWidth:1,borderColor:'#eee'},user:{fontWeight:'bold'},videoBox:{height:300,backgroundColor:'#000',justifyContent:'center',alignItems:'center',marginVertical:10},videoText:{color:'#fff',fontSize:20},actions:{flexDirection:'row',gap:20,marginTop:10}})
