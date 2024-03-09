import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="items-center">
        <Text className="font-extrabold text-xl">Sign In</Text>
      </View>
      <View className="w-60 bg-gray-300 rounded-lg h-10 justify-center p-2 m-2">
        <TextInput placeholder="Email" placeholderTextColor="#003f5c" />
      </View>
      <View>
        <TextInput
          className="w-60 bg-gray-300 rounded-lg h-10 justify-center p-2"
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity className="m-3" onPress={() => router.back()}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <View className="flex-row space-x-3 m-2">
        <TouchableOpacity onPress={() => router.navigate("/products")}>
          <Text className="bg-black border font-bold text-white text-lg whitespace-pre rounded-2xl px-8 py-2">
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="border font-bold text-black text-lg whitespace-pre rounded-2xl px-8 py-2">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;
