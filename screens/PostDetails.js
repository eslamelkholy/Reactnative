import React from 'react';
import {View, Text,Image,} from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native'

const PostDetails = () =>{
    const [postImg, setPostImg] = React.useState();
    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View style={{justifyContent:"center", alignItems:"center",marginTop:30}}>
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
            <Text style={{fontSize:24, fontWeight:"bold"}}>
                Title : {route.params.post.title}
            </Text>
            <Text style={{fontSize:24, fontWeight:"bold",color:"orange"}}>
                Body : {route.params.post.body}
            </Text>
        </View>
    )
}
export default PostDetails;