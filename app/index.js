import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen/>
    </SafeAreaView>
  );
};

export default Home;
