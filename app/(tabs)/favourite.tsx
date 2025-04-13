import {View, ScrollView, FlatList} from 'react-native'
import React from 'react'
import NotificationHeader from "@/components/homeComponents/NotificationHeader";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import {favouritePodcastsImages, trendingPodcastsImages} from "@/constants/homeImages";
import {trendingPodcastCardProps} from "@/types";
import TrendingPodcastCard from "@/components/homeComponents/TrendingPodcastCard";


const Favourite = () => {
    return (
        <View className={"flex-1 bg-[#F5F5F5] px-3 pb-4"}>
            <NotificationHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Trending Podcasts   */}
                <HomeBlock
                    title={"Favourite Podcasts"}
                    seeMore={false}
                    component={
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            data={favouritePodcastsImages}
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
export default Favourite
