import {View, Text, Image} from 'react-native'
import React from 'react'
// @ts-ignore
import playIcon from "@/assets/images/home/trendings_podcasts/playIcon.png";
import {topCategoryCardProps} from "@/types";

const TopCategoryCard = ({item}:{item: topCategoryCardProps}) => {
    return (
        <View className={"flex-col justify-between gap-1 w-[48%]"}>
            <Image source={item.url} resizeMode={"contain"} className={"w-[100%]"}/>
            <Text className={"text-lg font-semibold"}>{item.title}</Text>
            <Text className={"text-md text-gray-500"}>{item.num_of_podcasts} podcasts</Text>
        </View>
    )
}
export default TopCategoryCard
