import {View, Text, TextInput, ScrollView, FlatList, Image, TouchableHighlight} from 'react-native'
import React, {useState} from 'react'
import NotificationHeader from "@/components/homeComponents/NotificationHeader";
import {FontAwesome} from "@expo/vector-icons";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import {
    continueListeningImages,
    promotedPodcastsImages,
    topCategoryImages, topFivePodcastsImages,
    trendingPodcastsImages
} from "@/constants/homeImages";
import {continueListeningCardProps, imageStructure, topCategoryCardProps, trendingPodcastCardProps} from "@/types";
import TrendingPodcastCard from "@/components/homeComponents/TrendingPodcastCard";
import ContinueListeningCard from "@/components/homeComponents/ContinueListeningCard";
import TopCategoryCard from "@/components/homeComponents/TopCategoryCard";

const Explore = () => {
    const [activeTopic, setActiveTopic] = useState<string>("Motivation")
    return (
        <View className={"flex-1 bg-[#F5F5F5] px-3 pb-4"}>
            <NotificationHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Today’s Top 5 Podcasts */}
                <HomeBlock
                    title={"Today’s Top 5 Podcasts"}
                    seeMore={false}
                    component={
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            data={topFivePodcastsImages}
                            renderItem={({item}:{item: imageStructure})=>{
                                return <Image source={item.url} />;
                            }}
                            contentContainerStyle={{
                                gap: 15,
                                marginBottom: 20,
                            }}
                        />
                    }
                />


                <View className={"w-full"}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        data={[{id: 1, value: "Motivation"}, {id: 2, value: "Lifestyle"}, {id: 3, value: "Business"}, {id: 4, value: "Sport"}, {id: 5, value: "Study"}, {id: 6, value: "Science"}, {id: 7, value: "Game"}]}
                        renderItem={({item}:{item: {id: number, value: string}})=>{
                            return (
                                <TouchableHighlight
                                    activeOpacity={1}
                                    underlayColor={"transparent"}
                                    onPress={() => setActiveTopic(item.value)}
                                    className={"flex-col justify-center items-center relative px-8 py-4 rounded-full " + (activeTopic == item.value ? "bg-[#FF5757]":"bg-red-100")}>
                                    <Text className={"text-md font-semibold " + (activeTopic === item.value ? "text-white":"text-black")}>{item.value}</Text>
                                </TouchableHighlight>
                            );
                        }}
                        contentContainerStyle={{
                            gap: 15,
                        }}
                    />
                </View>

                {/* Trending Podcasts   */}
                <HomeBlock
                    seeMore={false}
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={trendingPodcastsImages}
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
export default Explore
