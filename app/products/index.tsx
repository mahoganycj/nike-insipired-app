import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import Card from "../../components/Card";
import { Products } from "../libs/type";
import { products } from "../libs/data";

type CardsProps = {
  product: Products[];
};

const ProductLists = ({ product }: CardsProps) => {
  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={products}
        renderItem = {({item}) =>
          <Card product = {item}/>
        }
      />
    </SafeAreaView>
  );
};

export default ProductLists;