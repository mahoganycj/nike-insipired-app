import { useLocalSearchParams } from "expo-router";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { products } from "../../libs/data";
import { Products } from "../../libs/type";
import { useState } from "react";
import Star from "../../../components/Star";
import { Svg, Path } from "react-native-svg";

type CardProps = { product: Products };

export default function Page() {
  const { slug } = useLocalSearchParams();
  const [Count, setCount] = useState(0);
  const addCount = () => {
    setCount(Count + 1);
  };
  const reductionCount = () => {
    return Count > 0 ? setCount(Count - 1) : setCount(0);
  };
  const item = products.find((item) => item.slug === slug);
  if (!item) {
    return <Text>Item not Found</Text>;
  }
  return (
    <SafeAreaView className="h-full relative bg-white">
      <View className="flex-1  mx-5 mt-5">
        <Image
          src={item.image}
          className="w-full h-96 pb-5 self-center z-[-1]"
        />
        <View className="py-5">
          <Text className="text-md font-bold">
            {"Rating: "}
            <Svg
              width="9"
              height="9"
              fill="none"
              className="inline-block   h-[9px] w-[9px]"
            >
              <Path
                d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
                fill="#F7B543"
              ></Path>
            </Svg>
            {item.rate}
          </Text>
          <Text className="text-2xl font-bold">{item.brand}</Text>
          <Text className="text-lg font-bold">{item.description}</Text>
          <Text className="text-3xl font-bold">
            {"Php "}
            {item.price}
          </Text>
        </View>
        <View className="">
          <View className="flex-row rounded-full w-28 ">
            <TouchableOpacity
              onPress={reductionCount}
              className="bg-black w-10 rounded-lg items-center"
            >
              <Text className="text-white text-5xl">-</Text>
            </TouchableOpacity>
            <Text className="m-auto text-xl">{Count}</Text>
            <TouchableOpacity
              onPress={addCount}
              className="bg-black w-10 rounded-lg items-center justify-center"
            >
              <Text className="text-white text-4xl">+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-white  border rounded-2xl w-28 my-4 p-3">
            <Text className="text-center font-bold">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
