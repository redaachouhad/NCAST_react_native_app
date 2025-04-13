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
import {continueListeningCardProps, imageStructure, topCategoryCardProps, trendingPodcastCardProps} from "@/types";



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
