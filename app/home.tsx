import { FlatList, Image, Pressable, View } from "react-native";
import React from "react";
import { Appbar, Divider, List, Text } from "react-native-paper";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import data from "../data/movies.json";
import { router, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Home = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: "Earn",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="dollar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Home;
