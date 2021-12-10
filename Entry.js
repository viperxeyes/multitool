import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "./components/Splash";
import { CompassScreen, HomeScreen, NotesScreen } from "./screens/Screens";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Entry() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Effect", loading);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgba(36, 39, 54, 0.98)",
            shadowColor: "transparent",
          },
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "rgba(36, 39, 54, 0.98)",
            height: "10%",
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Weather"
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./assets/images/cloudy.png")}
                  style={styles.image}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notes Home"
          component={NotesScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./assets/images/post-it.png")}
                  style={styles.image}
                />
              );
            },
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Compass"
          component={CompassScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./assets/images/kaaba.png")}
                  style={styles.image}
                />
              );
            },
          }}
        />
      </Tab.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#3c3f41",
    alignItems: "center",
  },
  button: {
    width: "70%",
    flexDirection: "row",
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  header: {
    marginTop: "20%",
    fontSize: 30,
    color: "black",
  },
  image: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 80,
    color: "gray",
  },
});
