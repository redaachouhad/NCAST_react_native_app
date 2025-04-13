import {View, Text, Image} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";
import {FontAwesome} from "@expo/vector-icons";

const NotificationHeader = () => {
    return (
        <View className={"flex-row justify-between items-center"}>
            <View className={"flex-row gap-4 justify-start items-center py-5"}>
                <Image source={icons.logo}/>
                <Text className={"text-[#4C0099] text-[2.5rem] font-bold"}>NCAST</Text>
            </View>
            <View className={"relative flex-col justify-center items-center w-16 h-16 rounded-full"}>
                <View className={"bg-red-600 w-4 h-4 rounded-full absolute right-0 top-0"}></View>
                <View className={"w-full h-full  bg-[#1F1F1F] absolute left-0 top-0 opacity-10 rounded-full"}></View>
                <FontAwesome name={"bell"} size={25} color={"#1F1F1F"} className={"opacity-100"}/>
            </View>
        </View>
    )
}
export default NotificationHeader
