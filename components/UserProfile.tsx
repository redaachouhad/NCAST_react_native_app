import {View, Text, Image} from 'react-native'
import React from 'react'
// @ts-ignore
import profileUser from "@/assets/images/profile_image.jpg";

const UserProfile = () => {
    return (
        <View className={"w-full bg-[#4C0099] flex-col justify-center items-center mt-[7.5rem] relative rounded-3xl h-80 mb-4"}>
            <Image source={profileUser} alt="profile image" className={"w-64 h-64 rounded-full border-[10px] border-white mx-auto -top-32 mb-10"}/>
            <View className={"w-full absolute mx-auto top-40"}>
                <View className={"w-full mb-4"}>
                    <Text className={"text-white text-4xl font-bold text-center"}>John Smith</Text>
                </View>
                <View className={"flex-row justify-center items-center gap-4"}>
                    <View className={"flex-col justify-center items-center gap-3"}>
                        <Text className={"text-3xl text-white font-semibold"}>22</Text>
                        <Text className={"text-xl text-white font-light"}>Liked Podcasts</Text>
                    </View>
                    <View></View>
                    <View className={"flex-col justify-center items-center gap-3"}>
                        <Text className={"text-3xl text-white font-semibold"}>158</Text>
                        <Text className={"text-xl text-white font-light"}>Following</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default UserProfile
