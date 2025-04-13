// @ts-ignore
import promo_podcast1 from "@/assets/images/home/promoted_podcasts/podcast1.png";
// @ts-ignore
import promo_podcast2 from "@/assets/images/home/promoted_podcasts/podcast2.png";
// @ts-ignore
import trend_podcast1 from "@/assets/images/home/trendings_podcasts/trendingPodcast1.png";
// @ts-ignore
import trend_podcast2 from "@/assets/images/home/trendings_podcasts/trendingPodcast2.png";

// @ts-ignore
import trend_podcast3 from "@/assets/images/home/trendings_podcasts/trendingPodcast3.png";
import {
    continueListeningCardProps,
    imageStructure,
    topCategoryCardProps,
    trendingPodcastCardProps,
    trendingPodcastScreen
} from "@/types";



export const promotedPodcastsImages : imageStructure[] = [
    {id: 1, url: promo_podcast1},
    {id: 2, url: promo_podcast2},
]
export const trendingPodcastsImages : trendingPodcastCardProps[] = [
    {id: 1, url: trend_podcast1, title:"See Mama Be", creator:"Creative Studio", duration: 15},
    {id: 2, url: trend_podcast2, title:"Festival on the Beach", creator:"Rock Electrics", duration: 15},
    {id: 3, url: trend_podcast3, title:"Your Time", creator:"Educational", duration: 25},
]

// @ts-ignore
import continue_podcast1 from "@/assets/images/home/continue_listening/continueListening1.png";
// @ts-ignore
import continue_podcast2 from "@/assets/images/home/continue_listening/continueListening2.png";
// @ts-ignore
import continue_podcast3 from "@/assets/images/home/continue_listening/continueListening3.png";
// @ts-ignore
import continue_podcast4 from "@/assets/images/home/continue_listening/continueListening4.png";

export const continueListeningImages : continueListeningCardProps[] = [
    {id: 1, url: continue_podcast1, title:"Talk Show - Ep10", remainingTime: 30 },
    {id: 2, url: continue_podcast2, title:"Talk Show - Ep7", remainingTime: 15},
    {id: 3, url: continue_podcast3, title:"Musical Soul - Vol. 3", remainingTime: 35},
    {id: 4, url: continue_podcast4, title:"Let's Stand Up", remainingTime: 5},
]

//------------- top category ----------------

// @ts-ignore
import top_category1 from "@/assets/images/home/top_categories/topCategorie1.png";
// @ts-ignore
import top_category2 from "@/assets/images/home/top_categories/topCategorie2.png";

export const topCategoryImages : topCategoryCardProps[] = [
    {id: 1, url: top_category1, title:"Business", num_of_podcasts: 125 },
    {id: 2, url: top_category2, title:"Healthy Lifestyle", num_of_podcasts: 158 },
]

//-------------- top's 5 podcast -----------------
// @ts-ignore
import top_podcast1 from "@/assets/images/explore/top_podcasts/toppodcast1.png";
// @ts-ignore
import top_podcast2 from "@/assets/images/explore/top_podcasts/toppodcast2.png";

export const topFivePodcastsImages : imageStructure[] = [
    {id: 1, url: top_podcast1},
    {id: 2, url: top_podcast2},
    {id: 3, url: top_podcast1},
    {id: 4, url: top_podcast2},
]


// -------------------- trending podcasts screen -----------------------
// @ts-ignore
import trend_podcast_screen1 from "@/assets/images/trending_podcasts_screen/trending_podcasts/trending_podcast1.png";
// @ts-ignore
import trend_podcast_screen2 from "@/assets/images/trending_podcasts_screen/trending_podcasts/trending_podcast2.png";
// @ts-ignore
import trend_podcast_screen3 from "@/assets/images/trending_podcasts_screen/trending_podcasts/trending_podcast3.png";
// @ts-ignore
import trend_podcast_screen4 from "@/assets/images/trending_podcasts_screen/trending_podcasts/trending_podcast4.png";


export const trendPodcastScreenImages : trendingPodcastScreen[] = [
    {id: 1, url: trend_podcast_screen1, title:"Mind of an Entrepreneur", category: "Business" },
    {id: 2, url: trend_podcast_screen2, title:"Unravelling the Mind", category: "Healthy Lifestyle"},
    {id: 2, url: trend_podcast_screen3, title:"A Tale of Writer", category: "Educational"},
    {id: 2, url: trend_podcast_screen4, title:"Addiction to Social!", category: "Sociology"},
]


// --------------------------- Recommended for you ---------------------------

// @ts-ignore
import recommended_for_you1 from "@/assets/images/trending_podcasts_screen/recommended_for_you/recommended_for_you1.png";
// @ts-ignore
import recommended_for_you2 from "@/assets/images/trending_podcasts_screen/recommended_for_you/recommended_for_you2.png";

export const recommendedForYouImages: trendingPodcastCardProps[] = [
    {id: 1, url: recommended_for_you1, title:"Mind map", creator:"Health & Lifestyle", duration: 10},
    {id: 2, url: recommended_for_you2, title:"True Crime", creator:"Investigation Theories", duration: 24},
];


// --------------------------------- Favourite Podcasts -----------------------

// @ts-ignore
import favourite_podcast1 from "@/assets/images/favourite_podcasts/favourite_podcast1.png";
// @ts-ignore
import favourite_podcast2 from "@/assets/images/favourite_podcasts/favourite_podcast2.png";
// @ts-ignore
import favourite_podcast3 from "@/assets/images/favourite_podcasts/favourite_podcast3.png";
// @ts-ignore
import favourite_podcast4 from "@/assets/images/favourite_podcasts/favourite_podcast4.png";
// @ts-ignore
import favourite_podcast5 from "@/assets/images/favourite_podcasts/favourite_podcast5.png";
// @ts-ignore
import favourite_podcast6 from "@/assets/images/favourite_podcasts/favourite_podcast6.png";

export const favouritePodcastsImages : trendingPodcastCardProps[] = [
    {id: 1, url: favourite_podcast1, title:"Sunday Summer - Ep3", creator:"Entertainment", duration: 15},
    {id: 2, url: favourite_podcast2, title:"Musical Soul - Vol. 1", creator:"Lifestyle", duration: 30},
    {id: 3, url: favourite_podcast3, title:"Talk Show - Ep4", creator:"Business", duration: 25},
    {id: 4, url: favourite_podcast4, title:"Musical Soul - Vol. 2", creator:"Lifestyle", duration: 5},
    {id: 5, url: favourite_podcast5, title:"Unravelling The Mind", creator:"Healthy Lifestyle", duration: 45},
    {id: 6, url: favourite_podcast6, title:"Talk Show - Ep8", creator:"Entertainment", duration: 35},
]


