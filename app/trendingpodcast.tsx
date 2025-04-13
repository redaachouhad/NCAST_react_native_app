import {View, Text, TextInput, ScrollView, FlatList} from 'react-native'
import React from 'react'
import {FontAwesome} from "@expo/vector-icons";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import {recommendedForYouImages, trendPodcastScreenImages} from "@/constants/homeImages";
import {trendingPodcastCardProps, trendingPodcastScreen} from "@/types";
import TrendingPodcastsScreenCard from "@/components/trendingPodcastsComponents/TrendingPodcastsScreenCard";
import TrendingPodcastCard from "@/components/homeComponents/TrendingPodcastCard";

const TrendingPodcast = () => {
    return (
        <View className={"flex-1 bg-[#F5F5F5] px-3 pb-4"}>
            <View className={"mt-10"}>
                {/* Search Bar */}
                <View className={"flex-row justify-between items-center gap-1 relative pb-4"}>
                    <View className={"absolute left-0 top-0 w-full h-full bg-[#1F1F1F] opacity-10 rounded-full"}></View>
                    <FontAwesome name={"search"} size={22} className={"pl-4"} />
                    <TextInput placeholder={"Search the podcast here ..."} className={"flex-1 ml-3"} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* Trending podcasts  */}
                <HomeBlock
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={trendPodcastScreenImages}
                            numColumns={2}
                            renderItem={({item}:{item: trendingPodcastScreen})=>{
                                return <TrendingPodcastsScreenCard item={item} />;
                            }}
                            contentContainerStyle={{
                                gap: 15,
                            }}
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                            }}
                        />

                    }
                />

                {/* Recommended For You */}
                <HomeBlock
                    title={"Recommended For You"}
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={recommendedForYouImages}
                            renderItem={({item}:{item: trendingPodcastCardProps})=>{
                                return <TrendingPodcastCard item={item} />;
                            }}

                            contentContainerStyle={{
                                gap: 30,
                            }}
                        />
                    }
                />

            </ScrollView>
        </View>
    )
}
export default TrendingPodcast
