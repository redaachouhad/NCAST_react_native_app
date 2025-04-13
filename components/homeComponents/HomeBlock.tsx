import {View, Text, FlatList, Image} from 'react-native'
import React from 'react';
import {Link} from "expo-router";

const HomeBlock = (
    {title, seeMore = true, component}: {title: string, seeMore?: boolean, component: React.ReactNode}
) => {
    return (
        <View className={"w-full " + (!title && "mt-6")}>
            {title && <View className={"w-full mt-6 mb-4 flex-row items-center justify-between"}>
                <Text className={"text-2xl font-bold mb-2"}>{title}</Text>
                { seeMore && <Link href={"/home"} className={"text-lg text-gray-400 font-semibold"}>See More</Link> }
            </View>}


            {component}
        </View>
    )
}
export default HomeBlock
