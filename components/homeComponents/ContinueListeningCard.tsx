import {View, Text, Image} from 'react-native'
import React from 'react'
// @ts-ignore
import playIcon from "@/assets/images/home/trendings_podcasts/playIcon.png";
import {continueListeningCardProps} from "@/types";

const ContinueListeningCard = ({item}:{item : continueListeningCardProps}) => {
    return (
        <View className={"flex-row justify-between gap-1"}>
            <View className={"flex-row  gap-4 flex-1"}>
                <Image source={item.url} className={"w-32 h-32"} />
                <View className={"flex-col justify-center gap-4 flex-1"}>
                    <Text className={"text-xl font-semibold"}>{item.title}</Text>
                    <Text className={"text-md text-gray-500"}>{item.remainingTime} min remaining</Text>
                    <View className={"h-3 rounded-full flex-row justify-start items-center overflow-hidden relative"}>
                        <View className={"bg-[#E9E9E9] w-full h-full absolute top-0 left-0"}></View>
                        <View className={"bg-[#FF5757] w-[70%] h-full rounded-full"}></View>
                    </View>
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
export default ContinueListeningCard
