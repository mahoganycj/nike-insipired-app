import { Stack, router } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";
import SvgComponent from "../../components/BackSvg";
import BackSvg from "../../components/BackSvg";
import Burger from "../../components/Burger";
import Cart from "../../components/Cart";
import Search from "../../components/Search";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: "Shop",
        headerLeft: () => (
          <View className="pr-5">
            <Pressable onPress={() => router.back()}>
              <BackSvg/>
            </Pressable>
          </View>
        ),statusBarStyle: "dark",
      }}
    />
  );
};

export default Layout;