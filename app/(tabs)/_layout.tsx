import React from 'react'
import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

const _Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color } : {color : any}) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: false,
                    title: 'Explore',
                    tabBarIcon: ({ color } : {color : any}) => <FontAwesome size={28} name="compass" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favourite"
                options={{
                    headerShown: false,
                    title: 'Favourite',
                    tabBarIcon: ({ color } : {color : any}) => <FontAwesome size={28} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ color } : {color : any}) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />

        </Tabs>
    )
}
export default _Layout
