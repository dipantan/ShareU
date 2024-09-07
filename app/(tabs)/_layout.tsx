import React from "react";

import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text } from "react-native-paper";

const Home = () => {
  console.log("Home");

  return (
    <>
      <Text
        variant="titleLarge"
        style={{
          backgroundColor: "#1d2140",
          textAlign: "center",
          fontFamily: "serif",
          fontWeight: "bold",
          color: "white",
        }}
      >
        ShareU
      </Text>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          headerShown: false,
          tabBarStyle: { backgroundColor: "#2d3466" },
        }}
        sceneContainerStyle={{ backgroundColor: "#1d2140" }}
      >
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
              <FontAwesome size={28} name="rupee" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Home;
