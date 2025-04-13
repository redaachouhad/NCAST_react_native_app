import {View, Text, TextInput, TouchableHighlight, Image} from 'react-native'
import React from 'react'
import {FontAwesome} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";
import {icons} from "@/constants/icons";

const Signup = () => {
    const router = useRouter();
    return (
        <View className={"flex-1 flex-col justify-center gap-5"}>
            <View className={"flex-row gap-4 justify-center items-center py-5"}>
                <Image source={icons.logo}/>
                <Text className={"text-[#4C0099] text-[2.5rem] font-bold"}>NCAST</Text>
            </View>
            <View className={"w-full p-4 flex-col justify-center items-center"}>
                <View
                    className={"w-full p-4 rounded-lg"}
                    style={{
                        boxShadow: "0 0 10px black",
                    }}
                >
                    <Text className={"text-4xl text-blue-600 font-bold text-center mb-16"}>Sign Up</Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#999"
                        className="border border-gray-300 rounded-md px-4 py-3 mb-10 text-base"
                        keyboardType="email-address"
                    />
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor="#999"
                        className="border border-gray-300 rounded-md px-4 py-3 mb-10 text-base"
                        keyboardType="email-address"
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        className="border border-gray-300 rounded-md px-4 py-3 mb-10 text-base"
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#999"
                        className="border border-gray-300 rounded-md px-4 py-3 mb-10 text-base"
                        secureTextEntry={true}
                    />
                    <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#DDDDDD"
                        onPress={() => router.push("/(tabs)/home")}
                        className={"bg-[#4C0099] rounded-full overflow-hidden mb-5"}
                    >
                        <Text className={"text-white text-2xl font-medium text-center py-3"}>Sign up</Text>
                    </TouchableHighlight>
                    <View className={"relative w-full flex-row justify-center items-center gap-4 mb-5"}>
                        <View className={"border border-black flex-1"}></View>
                        <Text className={"text-xl font-semibold text-center"}>Or</Text>
                        <View className={"border border-black flex-1"}></View>
                    </View>
                    <View className={"w-full flex-row justify-around items-center"}>
                        <TouchableHighlight
                            onPress={() => {}}
                            className={"bg-[#4267B2] py-6 px-8 rounded-full"}
                        >
                            <FontAwesome name="facebook" size={30} color="#fff" />
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => {}}
                            className={"bg-[#DB4437] py-6 px-7 rounded-full"}
                        >
                            <FontAwesome name="google" size={30} color="#fff" />
                        </TouchableHighlight>
                    </View>
                    <Link href={"/signin"} className={"text-center mt-8 text-xl text-blue-500 font-bold"}>
                        Already member ?
                    </Link>
                </View>
            </View>
        </View>
    )
}
export default Signup
