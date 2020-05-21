import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostList from '../screens/PostList';
import PostDetails from '../screens/PostDetails';
import Profile from '../screens/Profile';
import GetPosts from '../screens/GetPosts';

const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();
const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();


const Home = () =>{
    return(
        <StackNavigator screenOptions={{
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:"#9400D3",
            }
        }}>
            <StackScreen 
                name="PostsList"
                component={PostList}
                options={{
                    title:"PostsList",
                }}
            />
            <StackScreen 
                name="PostDetails"
                component={PostDetails}
                options={({ navigation }) =>({
                    headerTitle:"DETAILS",
                    headerLeft: () =>{
                        return <Text style={{color:"white"}} onPress={() => navigation.goBack()}> {'<'} Back</Text>
                    }
                })}
            />
            <StackScreen 
                name="GET POSTS"
                component={Profile}
                options={({ navigation }) =>({
                    headerTitle:"Redirect PostsList",
                    
                })}
            />
        </StackNavigator>
    )
}
const MyProfile = () =>{
    return(
        <StackNavigator screenOptions={{
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerStyle:{backgroundColor:"#9400D3"}
        }}>
            <StackScreen 
                name="GET POSTS"
                component={Profile}
                options={({ navigation }) =>({
                    headerTitle:"Redirect PostsList",
                    
                })}
            />
        </StackNavigator>
    )
}
const RootNavigator = () =>{
    return(
        <NavigationContainer>
            <TabNavigator 
                tabBarOptions={{
                    activeTintColor: "white",
                    inactiveTintColor:"	#EE82EE	",
                    labelStyle:{fontSize:24},
                    tabStyle:{backgroundColor:"#9400D3",justifyContent:"center"}
                }}>
                <TabScreen name="Posts" component={Home} />
                <TabScreen name="Profile" component={MyProfile} />
            </TabNavigator>
        
    </NavigationContainer>
    )
}

export default RootNavigator;