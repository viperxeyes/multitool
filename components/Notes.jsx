import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { db } from "../api/firebase";
import { collection, getDocs, query, onSnapshot } from "@firebase/firestore";
import NoteCard from "./NoteCard";

const Stack = createNativeStackNavigator();
export default function Notes({ navigation }) {
  const [notes, setNotes] = useState();
  const getNotes = async () => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notes);
    });
    // const notesCol = await collection(db, "notes");
    // const notesSnapshot = await getDocs(notesCol);
    // const notes = notesSnapshot.docs.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id,
    // }));
    // setNotes(notes);
  };

  const onPress = (note) => {
    navigation.navigate("AddEditNote", note);
  };
  const addNote = (note) => {
    console.log(note);
  };
  useEffect(() => {
    getNotes();
  }, []);
  const Press = () => {
    navigation.navigate("AddEditNote");
  };
  return (
    <View
      style={{
        backgroundColor: "#242736",
        flex: 1,
        position: "relative",
      }}
    >
      <ScrollView style={{ zIndex: 20 }}>
        {notes ? (
          notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                text={note.content}
                note={note}
                onPress={onPress}
              />
            );
          })
        ) : (
          <ActivityIndicator
            style={{ alignSelf: "center" }}
            size="large"
            color="rgba(255, 238, 6, 0.651)"
          />
        )}
      </ScrollView>
      <TouchableOpacity
        style={{
          bottom: "3%",
          position: "absolute",
          right: 10,
          zIndex: 30,
        }}
        onPress={Press}
      >
        <View
          style={{
            backgroundColor: "gray",
            borderRadius: 50,
            overflow: "hidden",
            height: 70,
            width: 70,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontFamily: "ChangaMedium",
    fontSize: 15,
    color: "#FFF",
  },
});
