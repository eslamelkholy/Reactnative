import React from 'react';
import {View, Text,Image,} from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native'

const GetPosts = () =>{
    const [postImg, setPostImg] = React.useState();
    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View style={{justifyContent:"center", alignItems:"center",marginTop:30}}>
            <Text style={{fontSize:24, fontWeight:"bold",color:"#9400D3"}} onPress={() => navigation.navigate("PostsList")}>
                GetPosts
            </Text>
        </View>
    )
}
export default GetPosts;