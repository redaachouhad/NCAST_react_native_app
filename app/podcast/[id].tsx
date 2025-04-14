import {Image, Text, TouchableHighlight, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
// @ts-ignore
import play_podcast from "@/assets/images/playing_podcast/play_podcast.png";
import {FontAwesome} from "@expo/vector-icons";
// @ts-ignore
import arrows_down_up_fill from "@/assets/images/playing_podcast/arrows-down-up-fill.png";
// @ts-ignore
import clock_clockwise_fill from "@/assets/images/playing_podcast/clock-clockwise-fill.png";
// @ts-ignore
import clock_counter_clockwise_fill from "@/assets/images/playing_podcast/clock-counter-clockwise-fill.png"
// @ts-ignore
import sort_ascending_fill from "@/assets/images/playing_podcast/sort-ascending-fill.png";

// @ts-ignore
import share_network_fill from "@/assets/images/playing_podcast/share-network-fill.png";
// @ts-ignore
import heart_fill from "@/assets/images/playing_podcast/heart-fill.png";
// @ts-ignore
import archive_box_fill from "@/assets/images/playing_podcast/archive-box-fill.png";
// @ts-ignore
import polygon1 from "@/assets/images/playing_podcast/Polygon1.png";

const OnePodcastScreen = () => {
    const {id} = useLocalSearchParams();
    return (
        <View className={"flex-1 w-full p-5 flex-col justify-between items-center"}>
            <View className={"w-full"}>
                <View className={" relative w-full flex-col justify-center items-center"}>
                    <Image source={play_podcast} className={"w-full"}
                           resizeMode={"stretch"}
                           style={{
                               shadowColor: '#000', // black shadow
                               shadowOffset: { width: 4, height: 4 },
                               shadowOpacity: 0.25,
                               shadowRadius: 6,
                           }}
                    />
                    <View className={"absolute -bottom-10 h-20 w-[70%] flex-row justify-around items-center overflow-hidden rounded-full border border-[#4C0099]"}>
                        <View className={"absolute bg-white w-full h-full left-0 top-0"}></View>
                        <TouchableHighlight className={"p-3 rounded-full"} underlayColor={"#ddd"} onPress={() => {}}>
                            <Image source={share_network_fill} />
                        </TouchableHighlight>
                        <TouchableHighlight className={"p-3 rounded-full"} underlayColor={"#ddd"} onPress={() => {}}>
                            <Image source={heart_fill} />
                        </TouchableHighlight>
                        <TouchableHighlight className={"p-3 rounded-full"} underlayColor={"#ddd"} onPress={() => {}}>
                            <Image source={archive_box_fill} />
                        </TouchableHighlight>
                    </View>
                </View>
                <Text className={"mt-16 text-4xl font-bold text-center"}>Sunday Vibes - Rift</Text>
                <Text className={"text-center mt-10 mb-10 text-xl text-gray-500"}>Entertainment</Text>
            </View>
            <View className={"flex-col w-full mb-10"}>
                <View className={"w-full flex-row justify-between items-center mb-10"}>
                    <Text className={"text-lg text-gray-500"}>07:00</Text>
                    <Text className={"text-lg text-gray-500"}>15:00</Text>
                </View>
                <View className={"h-4 mb-10 rounded-full overflow-hidden"}>
                    <View className={"bg-[#E9E9E9] w-full h-full absolute top-0 left-0"}></View>
                    <View className={"bg-[#4C0099] w-[70%] h-full rounded-full"}></View>
                </View>

                <View className={"w-full flex-row justify-around items-center bg-[#E9E9E9] p-2 rounded-full"}>

                    <Image source={arrows_down_up_fill} />
                    <Image source={clock_counter_clockwise_fill}/>
                    <View className={"bg-[#4C0099] p-8 rounded-full"}>
                        <Image source={polygon1}/>
                    </View>
                    <Image source={clock_clockwise_fill}/>
                    <Image source={sort_ascending_fill}/>
                </View>
            </View>
        </View>
    )
}
    export default OnePodcastScreen
