import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function NoteCard({ text, onPress, note }) {
  return (
    <TouchableOpacity
      onPress={() => onPress(note)}
      style={{
        width: Dimensions.get("window").width / 1.04,
        height: 140,
        justifyContent: "center",
        margin: "2%",
        elevation: 15,
        borderRadius: 10,
        borderBottomWidth: 2,

        borderColor: "orange",

        backgroundColor: "#54545eef",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,

          borderRadius: 10,
        }}
      >
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2e8f",

    alignItems: "center",
    paddingTop: "20%",
  },

  cardText: {
    fontFamily: "ChangaMedium",

    color: "#fff",
    fontSize: 13,
  },
});
