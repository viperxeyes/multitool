import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
export default function Splash() {
  const [loaded] = useFonts({
    ChangaBold: require("../assets/fonts/Changa-Bold.ttf"),
    ChangaMedium: require("../assets/fonts/Changa-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../assets/images/kaaba.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/post-it.png")}
          style={styles.image}
        />
      </View>
      <Image
        source={require("../assets/images/cloudy.png")}
        style={styles.image}
      />
      {loaded ? (
        <View style={{ marginTop: "10%" }}>
          <Text style={styles.textCenter}>Multi Tools App</Text>
          <Text style={styles.textCenter}>By</Text>
          <Text style={styles.textCenter}>Mohammed Al Shammary</Text>
        </View>
      ) : null}

      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="rgba(255, 238, 6, 0.651)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
    backgroundColor: "rgba(36, 39, 54, 0.98)",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "ChangaBold",
  },
  textCenter: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "ChangaBold",
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  indicator: {
    marginTop: "5%",
  },
});
