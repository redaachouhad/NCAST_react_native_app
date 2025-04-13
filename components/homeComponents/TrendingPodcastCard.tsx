import {View, Text, Image, TouchableHighlight} from 'react-native'
import React from 'react'
// @ts-ignore
import playIcon from "@/assets/images/home/trendings_podcasts/playIcon.png";
import {trendingPodcastCardProps} from "@/types";
import {useRouter} from "expo-router";

const TrendingPodcastCard = ({item}: {item: trendingPodcastCardProps}) => {
    const router = useRouter();
    return (
        <View className={"flex-row justify-between gap-3"}>
            <View className={"flex-row  gap-4 flex-1"}>
                <Image source={item.url} className={"w-32 h-32"} />
                <View className={"flex-col justify-center gap-2 flex-1"}>
                    <Text className={"text-xl font-semibold"}>{item.title}</Text>
                    <Text className={"text-md text-gray-500"}>{item.creator}</Text>
                    <Text className={"text-md text-gray-500"}>{item.duration} min</Text>
                </View>
            </View>
            <View className={"flex-row justify-center items-center"}>
                <TouchableHighlight
                    underlayColor={"#ddd"}
                    onPress={() => router.push("/podcast/123456789")}
                    className={"flex-row justify-center items-center relative w-16 h-16 rounded-full overflow-hidden"}
                >
                    <>
                        <View className={"bg-[#4C0099] opacity-10 absolute w-full h-full"}></View>
                        <Image source={playIcon} />
                    </>

                </TouchableHighlight>
            </View>
        </View>
    )
}
export default TrendingPodcastCard
