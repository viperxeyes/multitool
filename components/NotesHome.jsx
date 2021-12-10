import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Notes from "./Notes";
import AddEditNote from "./AddEditNote";

const Stack = createNativeStackNavigator();
export default function NotesHome() {
  const AddEditNoteScreen = ({ navigation, route }) => {
    return <AddEditNote navigation={navigation} route={route} />;
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgba(36, 39, 54, 1)" },
        headerTintColor: "#fff",
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen
        name="AddEditNote"
        component={AddEditNoteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
