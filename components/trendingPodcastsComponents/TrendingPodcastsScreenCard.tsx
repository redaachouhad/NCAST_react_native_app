import {View, Text, Image} from 'react-native'
import React from 'react'
import {trendingPodcastScreen} from "@/types";

const TrendingPodcastsScreenCard = ({item}:{item: trendingPodcastScreen}) => {
    return (
        <View className={"flex-col justify-between gap-1 w-[48%]"}>
            <Image source={item.url} resizeMode={"stretch"} className={"w-[100%]"}/>
            <Text className={"text-lg font-semibold"}>{item.title}</Text>
            <Text className={"text-md text-gray-500"}>{item.category}</Text>
        </View>
    )
}
export default TrendingPodcastsScreenCard
