import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Card, Divider, List, Text } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ rowGap: 16, marginBottom: 16 }}>
        <Card>
          <Card.Content
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Level 1</Text>
            <Text>Income Plan</Text>
            <Text>25 PAISA</Text>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Level 2</Text>
            <Text>Income Plan</Text>
            <Text>50 PAISA</Text>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Level 3</Text>
            <Text>Income Plan</Text>
            <Text>75 PAISA</Text>
          </Card.Content>
        </Card>
      </View>

      <Divider />

      {/* <Text
        variant="bodyMedium"
        style={{ marginTop: 8, color: "white", textAlign: "center" }}
      >
        My Teams
      </Text> */}

      <List.Section
        title="My Teams"
        titleStyle={{ color: "white", textAlign: "center" }}
        style={{ marginTop: -6, backgroundColor: "transparent" }}
      >
        <List.Accordion
          title="Team 1"
          style={{
            borderRadius: 8,
            backgroundColor: "white",
          }}
          theme={{ colors: { background: "transparent" } }}
          left={(props) => (
            <AntDesign
              name="team"
              size={24}
              style={props.style}
              color={props.color}
            />
          )}
        >
          <List.Item
            title="John Doe"
            style={styles.listItem}
            description="Member"
            right={() => <Text style={{ color: "green" }}>+10</Text>}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
          />
          <List.Item
            title="Jane Doe"
            style={styles.listItem}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
            description="Member"
            right={() => <Text style={{ color: "green" }}>+20</Text>}
          />
        </List.Accordion>

        <List.Accordion
          title="Team 2"
          style={{
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 16,
          }}
          theme={{ colors: { background: "transparent" } }}
          left={(props) => (
            <AntDesign
              name="team"
              size={24}
              style={props.style}
              color={props.color}
            />
          )}
        >
          <List.Item
            title="Biyanka Doe"
            style={styles.listItem}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
          />
          <List.Item
            title="Maria Doe"
            style={styles.listItem}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
          />
        </List.Accordion>

        <List.Accordion
          title="Team 3"
          style={{
            borderRadius: 8,
            backgroundColor: "white",
            marginTop: 16,
          }}
          theme={{ colors: { background: "transparent" } }}
          left={(props) => (
            <AntDesign
              name="team"
              size={24}
              style={props.style}
              color={props.color}
            />
          )}
        >
          <List.Item
            title="Rex Doe"
            style={styles.listItem}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
          />
          <List.Item
            title="Walter Doe"
            style={styles.listItem}
            left={() => (
              <Image
                source={{ uri: "https://avatar.iran.liara.run/public" }}
                style={styles.image}
              />
            )}
          />
        </List.Accordion>
      </List.Section>

      <Divider style={{ marginTop: 16 }} />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    backgroundColor: "white",
    // marginBottom: 8,
    padding: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
