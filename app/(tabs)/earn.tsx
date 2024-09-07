import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";
import data from "@/data/movies.json";
import { Video, ResizeMode } from "expo-av";
import { IconButton } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Earn = () => {
  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <View>
        <Video
          style={styles.video}
          source={{
            uri:
              item.videos.small.url ||
              "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode={ResizeMode.COVER}
          isLooping
          // shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded) {
              // console.log(status);
            }
          }}
        />
        <View style={{ position: "absolute", top: "50%", right: 0 }}>
          <IconButton
            icon={() => <AntDesign name="like2" size={24} color="white" />}
          />
          <IconButton
            icon={() => (
              <FontAwesome name="comment-o" size={24} color="white" />
            )}
          />
          <IconButton
            icon={() => <AntDesign name="download" size={24} color="white" />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Image
            source={{ uri: item.userImageURL }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "white",
              marginRight: 10,
            }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}
          >
            {item.user}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

export default Earn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
});
