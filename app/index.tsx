import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Sample } from "../components/Sample";
import { router } from "expo-router";
import ShoeJLogoW from "../components/ShoeJLogoW";
import { StatusBar } from "expo-status-bar";
import { A } from "@expo/html-elements";

export default function Page() {
  return (
    <View>
      <StatusBar style="dark" />
      <View className="bg-black h-screen justify-end items-start relative mix-blend-overlay">
        <Image
          src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/2a4fb606-5b2e-4eb1-af1a-9853d3ccf2d9/nike-just-do-it.jpg"
          alt=""
          className="absolute h-screen w-full opacity-30"
        />
        <View className="absolute h-screen w-full bg-gradient-to-t from-black via-black to-white" />
        <View className="p-5">
          <Image
            className="w-20 h-20 scale-[2.5] m-5"
            source={require("../assets/white_shoej.png")}
            alt=""
          />
          <Text className="font-bold text-white text-lg whitespace-pre pb-5">
            Free Shipping, members-only products the best of Nike, personalized
            for you.
          </Text>
          <View className="flex-row space-x-3">
            <View className="font-bold text-black bg-white px-7 py-4 rounded-3xl">
              <A
                href="https://www.nike.com/ph/membership"
              >
                Join Us
              </A>
            </View>
            <TouchableOpacity onPress={() => router.navigate("/sign-in")}>
              <Text className="font-bold text-white bg-black border border-white px-7 py-4 rounded-3xl">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

{
  /* <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Button title="To Blog" onPress={() => router.navigate('/blog')}/>
        
        <Button title="To Blog Post" onPress={() => router.navigate({
          pathname: "blog/[slug]",
          params: {slug: "HEHHEHE"}
        })
      }
      />
      </View>
    </View> */
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
