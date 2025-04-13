import {View, Text, Image} from 'react-native'
import React from 'react'
// @ts-ignore
import playIcon from "@/assets/images/home/trendings_podcasts/playIcon.png";
import {imageStructure, trendingPodcastCardProps} from "@/types";

const TrendingPodcastCard = ({item}: {item: trendingPodcastCardProps}) => {
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
                <View className={"flex-row justify-center items-center relative w-16 h-16 rounded-full overflow-hidden"}>
                    <View className={"bg-[#4C0099] opacity-10 absolute w-full h-full"}></View>
                    <Image source={playIcon} />
                </View>
            </View>
        </View>
    )
}
export default TrendingPodcastCard
