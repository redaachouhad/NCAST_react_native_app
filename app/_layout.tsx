import { Stack } from "expo-router";
import "./global.css"
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
      <>
            <Stack>
              <Stack.Screen name={"index"} options={{headerShown: false}} />
              <Stack.Screen name={"(auth)"} options={{headerShown: false}} />
              <Stack.Screen name={"(tabs)"} options={{headerShown: false}} />
              <Stack.Screen name={"trendingpodcast"} options={{ title: "Trending Podcasts"}} />
            </Stack>
      </>
  );
}
