import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Products } from "../app/libs/type";
import { router } from "expo-router";
import Star from "./Star";
import { Path, Svg } from "react-native-svg";

type CardProps = { product: Products };

const Card = ({ product }: CardProps) => {
  return (
    <View className="items-center bg-slate-200">
      <View className="items-center p-2 bg-white w-50 m-2 rounded-2xl shadow-2xl">
        <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "/products/[slug]",
              params: { slug: [product.slug] },
            })
          }
        >
          <Image
            src={product.image}
            className="w-60 h-60 self-center rounded-2xl"
          />
        </TouchableOpacity>
        <View className="w-56">
          <View className=" w-30">
            <View>
              <Text className="font-bold text-2xl">{product.brand}</Text>
            </View>
            <View>
              <Text>{product.description}</Text>
            </View>
            <Text>
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
              {product.rate}
            </Text>
            <View>
              <Text>
                {"Php "}
                {product.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Card;
