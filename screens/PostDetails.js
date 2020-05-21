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
            <Text style={{marginLeft:50,fontSize:20, fontWeight:"bold",}}>
                Title : {route.params.post.title}
            </Text>
            <Text style={{marginTop:30,fontSize:20, fontWeight:"bold",color:"#9400D3"}}>
                Body : {route.params.post.body}
            </Text>
        </View>
    )
}
export default PostDetails;