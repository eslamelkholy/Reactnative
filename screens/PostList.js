import React from 'react';
import {View, Text,Image, FlatList} from 'react-native';

const PostList = ({ navigation}) =>{
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        .then((jsonResponse) =>{
            setPosts(jsonResponse)
        })
    },[])
    
    return(
        <View style={{marginTop:20, flex:1}}>
            <FlatList
                data={posts}
                renderItem={({item: post, index}) =>{
                    return(
                        <View style={{justifyContent:"center", alignItems:"center",marginTop:10}}>
                            <Image
                            style={{
                                width: 200,
                                height: 200,
                                resizeMode: 'contain',
                            }}
                            source={{
                                uri:
                                'https://source.unsplash.com/random/200x200'
                            }}
                            />
                            <Text style={{fontSize:20, fontWeight:"bold"}} key={post.id} onPress={() => navigation.navigate("PostDetails", {post: post})}>
                            
                                {post.title}
                            </Text>
                        </View>
                    )
                }}
                extraData={posts}
                keyExtractor={(post, index) => post}
            />
        </View>
    )
}
export default PostList;