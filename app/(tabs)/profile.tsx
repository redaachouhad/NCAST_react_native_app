import {View, Text, ScrollView, FlatList, Image} from 'react-native'
import React from 'react'
import NotificationHeader from "@/components/homeComponents/NotificationHeader";
import HomeBlock from "@/components/homeComponents/HomeBlock";
import {continueListeningCardProps} from "@/types";
import ContinueListeningCard from "@/components/homeComponents/ContinueListeningCard";
// @ts-ignore
import profileUser from "@/assets/images/profile_image.jpg";
import {continueListeningImages} from "@/constants/homeImages";
import UserProfile from "@/components/UserProfile";

const Profile = () => {
    return (
        <View className={"flex-1 bg-[#F5F5F5] px-3 pb-4"}>
            <NotificationHeader />
            <UserProfile />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* Recently Played Podcasts  */}
                <HomeBlock
                    seeMore={false}
                    title={"Recently Played Podcasts"}
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

            </ScrollView>
        </View>
    )
}
export default Profile
