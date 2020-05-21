import React from 'react';
import {View, Text,Image} from 'react-native';

const PostList = ({ navigation}) =>{
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        .then((jsonResponse) =>{
            setPosts(jsonResponse)
        })
    },[])
    
    return(
        <View style={{justifyContent:"center", alignItems:"center",marginTop:30}}>
            {posts.map(post =>(
                
                <Text style={{fontSize:24, fontWeight:"bold"}} key={post.id} onPress={() => navigation.navigate("PostDetails", {post: post})}>
                <Image
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'contain'
                }}
                source={{
                    uri:
                    'https://source.unsplash.com/random/200x200'
                }}
                />
                    {post.title}
                </Text>
            ))}
        </View>
    )
}
export default PostList;