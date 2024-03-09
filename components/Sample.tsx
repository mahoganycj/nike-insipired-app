import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

type SampleProps = {
  variable: string;
};

const mappableArray = ["Sample1", "Sample2", "Sample2", "Sample2", "Sample2"];
export const Sample = ({ variable }: SampleProps) => {
  const [text, setText] = useState("");

  const [isSelected, setIsSelected] = useState(false);
  return (
    // <View>
    //   <Text className="text-yellow-200 text font-bold">{variable}</Text>
    //   <Text className="text-yellow-200 text font-bold">{text}</Text>
    //   <TextInput
    //     className="border-2 border-gray-50 bg-white"
    //     defaultValue="Default value"
    //     onChangeText={(newText) => setText(newText)}
    //   />

    //   <Image
    //     className="h-40 w-40"
    //     source={{ uri:  "https://reactnative.dev/docs/assets/p_cat1.png"}}
    //   />

    //   <Button
    //     title={isSelected ? "Selected" : "Not Selected"}
    //     onPress={() => setIsSelected(true)}
    //     disabled={isSelected}
    //   />
    // </View>

    // <ScrollView className="flex-1 pt-20">
    //   {Array(10)
    //     .fill(10)
    //     .map(() => (
    //       <>
    //         <Text className="text-yellow-200 text font-bold">{variable}</Text>
    //         <Text className="text-yellow-200 text font-bold">{text}</Text>
    //         <TextInput
    //           className="border-2 border-gray-50 bg-white"
    //           defaultValue="Default value"
    //           onChangeText={(newText) => setText(newText)}
    //         />

    //         <Image
    //           className="h-40 w-40"
    //           source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
    //         />

    //         <Button
    //           title={isSelected ? "Selected" : "Not Selected"}
    //           onPress={() => setIsSelected(true)}
    //           disabled={isSelected}
    //         />
    //       </>
    //     ))}
    // </ScrollView>

    <FlatList
      className="flex pt-20"
      ListHeaderComponent={() => <Text>Uloer to</Text>}
      ListFooterComponent={() => <Text>Paaer to</Text>}
      data={mappableArray}
      renderItem={({ item, index }) => (
        <>
          <Text className="text-yellow-200 text font-bold">{index}</Text>
          <Text className="text-yellow-200 text font-bold">{item}</Text>
          <Text className="text-yellow-200 text font-bold">{text}</Text>
          <TextInput
            className="border-2 border-gray-50 bg-white"
            defaultValue="Default value"
            onChangeText={(newText) => setText(newText)}
          />

          <Image
            className="h-40 w-40"
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          />

          <Button
            title={isSelected ? "Selected" : "Not Selected"}
            onPress={() => setIsSelected(true)}
            disabled={isSelected}
          />
        </>
      )}
    />
  );
};
