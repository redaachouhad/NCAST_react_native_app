import {Image, Text, TouchableOpacity, View} from "react-native";
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 flex-col justify-evenly"}>
        <View className={"flex-row gap-4 justify-center items-center py-5"}>
            <Image source={icons.logo}/>
            <Text className={"text-[#4C0099] text-[2.5rem] font-bold"}>NCAST</Text>
        </View>
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
            <TouchableOpacity className="w-[85%] bg-[#4C0099] py-4 rounded-full active:opacity-70">
                <Link href="/" asChild>
                    <Text className="text-2xl font-medium text-white text-center">Sign In</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity className="w-[85%] py-5 active:opacity-70">
                <Link href="/" asChild>
                    <Text className="text-2xl font-medium text-[#4C0099] text-center">Sign Up</Text>
                </Link>
            </TouchableOpacity>
        </View>


    </View>
  );
}
