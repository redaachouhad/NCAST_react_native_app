import {View, Text, Image, FlatList, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {FontAwesome} from "@expo/vector-icons";
import NotificationHeader from "@/components/homeComponents/NotificationHeader";
import {
    continueListeningImages,
    promotedPodcastsImages,
    topCategoryImages,
    trendingPodcastsImages
} from "@/constants/homeImages";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import TrendingPodcastCard from "@/components/homeComponents/TrendingPodcastCard";
import {continueListeningCardProps, imageStructure, topCategoryCardProps, trendingPodcastCardProps} from "@/types";
import ContinueListeningCard from "@/components/homeComponents/ContinueListeningCard";
import TopCategoryCard from "@/components/homeComponents/TopCategoryCard";


const Home = () => {
    return (
        <View className={"flex-1 bg-[#F5F5F5] px-3 pb-4"}>
            <View className={""}>
                <NotificationHeader />
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
                {/* Promoted Podcasts */}
                <HomeBlock
                    title={"Promoted Podcasts"}
                    seeMore={false}
                    component={
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            data={promotedPodcastsImages}
                            renderItem={({item}:{item: imageStructure})=>{
                                return <Image source={item.url} />;
                            }}
                            contentContainerStyle={{
                                gap: 15,
                            }}
                        />
                    }
                />

                {/* Trending Podcasts   */}
                <HomeBlock
                    title={"Trending Podcasts"}
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

                {/* Continue Listening  */}
                <HomeBlock
                    title={"Continue Listening"}
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={continueListeningImages}
                            renderItem={({item}:{item: continueListeningCardProps})=>{
                                return <ContinueListeningCard item={item} />;
                            }}

                            contentContainerStyle={{
                                gap: 25,
                            }}
                        />
                    }
                />

                {/* Top Categories  */}
                <HomeBlock
                    title={"Top Categories"}
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={topCategoryImages}
                            numColumns={2}
                            renderItem={({item}:{item: topCategoryCardProps})=>{
                                return <TopCategoryCard item={item} />;
                            }}
                            contentContainerStyle={{
                                gap: 10,
                            }}
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                            }}
                        />

                    }
                />

            </ScrollView>
        </View>
    )
}
export default Home
