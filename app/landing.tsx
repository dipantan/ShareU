import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-paper";
import Onboarding from "react-native-onboarding-swiper";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Onboarding
        showDone={false}
        onSkip={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "(tabs)" }],
          });
        }}
        pages={[
          {
            title: "Hey!",
            subtitle: "Welcome to $App!",
            backgroundColor: "#003c8f",
            image: (
              <Icon
                source={
                  <FontAwesome name="hand-peace-o" size={24} color="black" />
                }
                size={100}
                color="white"
              />
            ),
          },
          {
            title: "Send Messages",
            subtitle: "You can reach everybody with us",
            backgroundColor: "#5e92f3",
            image: (
              <Icon
                source={
                  <FontAwesome name="paper-plane-o" size={24} color="black" />
                }
                size={100}
                color="white"
              />
            ),
          },
          {
            title: "Get Notified",
            subtitle:
              "We will send you notification as soon as something happened",
            backgroundColor: "#1565c0",
            image: (
              <Icon
                source={<FontAwesome name="bell-o" size={24} color="black" />}
                size={100}
                color="white"
              />
            ),
          },
          {
            title: "That's Enough",
            subtitle: (
              <Button
                mode="contained"
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "home" }],
                  });
                }}
                style={{
                  marginTop: 20,
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#003c8f" }}>Get Started</Text>
              </Button>
            ),
            backgroundColor: "#003c8f",
            image: (
              <Icon
                source={<AntDesign name="rocket1" size={24} color="black" />}
                size={100}
                color="white"
              />
            ),
          },
        ]}
      />
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
