import {ImageSourcePropType} from "react-native";

export interface imageStructure {
    id: number;
    url: ImageSourcePropType;
}


export interface trendingPodcastCardProps extends imageStructure {
    title: string;
    creator: string;
    duration: number;
}

export interface continueListeningCardProps extends imageStructure {
    title: string;
    remainingTime: number;
}

export interface topCategoryCardProps extends imageStructure {
    title: string;
    num_of_podcasts: number;
}

export interface trendingPodcastScreen extends imageStructure {
    title: string;
    category: string;
}