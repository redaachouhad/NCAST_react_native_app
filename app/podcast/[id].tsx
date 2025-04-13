import {View, TextInput, ScrollView, FlatList, Image} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import NotificationHeader from "@/components/homeComponents/NotificationHeader";
import {FontAwesome} from "@expo/vector-icons";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import {
    continueListeningImages,
    promotedPodcastsImages, recommendedForYouImages,
    topCategoryImages,
    trendingPodcastsImages, trendPodcastScreenImages
} from "@/constants/homeImages";
import {
    continueListeningCardProps,
    imageStructure,
    topCategoryCardProps,
    trendingPodcastCardProps,
    trendingPodcastScreen
} from "@/types";
import TrendingPodcastCard from "@/components/homeComponents/TrendingPodcastCard";
import ContinueListeningCard from "@/components/homeComponents/ContinueListeningCard";
import TopCategoryCard from "@/components/homeComponents/TopCategoryCard";
import TrendingPodcastsScreenCard from "@/components/trendingPodcastsComponents/TrendingPodcastsScreenCard";

const OnePodcastScreen = () => {
    const {id} = useLocalSearchParams();
    return (
        <View></View>
    )
}
    export default OnePodcastScreen
