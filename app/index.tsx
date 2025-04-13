import {Image, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {images} from "@/constants/images";
import {Link, useRouter} from "expo-router";

export default function Index() {
    const router = useRouter();
  return (
    <View className={"flex-1 flex-col justify-evenly bg-[#F5F5F5]"}>

        <View className={"relative w-full"}>
            <Text className={"absolute -top-10 left-[10rem] text-[9rem] font-bold text-white"}>NCAST</Text>
            <Text className={"absolute -bottom-5 right-[10rem] text-[9rem] font-bold text-white"}>NCAST</Text>
            <Image source={images.headphone} className={" mx-auto"} resizeMode={"contain"} />
        </View>
        <View>
            <Text className={"text-5xl font-semibold text-center mb-5"}>Listen to your favourite podcast</Text>
            <Text className={"text-xl font-medium text-center text-gray-400"}>More than 1000+ best talks ever</Text>
        </View>
        <View className="flex-col justify-center w-full items-center gap-3">
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => router.push("/signin")}
                className="w-[85%] bg-[#4C0099] py-4 rounded-full"
            >
                    <Text className="text-2xl font-medium text-white text-center">Sign In</Text>
            </TouchableHighlight>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => router.push("/signup")}
                className="w-[85%] py-5"
            >
                    <Text className="text-2xl font-medium text-[#4C0099] text-center">Sign Up</Text>
            </TouchableHighlight>
        </View>


    </View>
  );
}
