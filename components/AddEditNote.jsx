import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Platform } from "expo-modules-core";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../api/firebase";

export default function AddEditNote({ navigation, route }) {
  const [note, setNote] = useState(null);

  const onDelete = async () => {
    if (route.params) {
      const noteDoc = doc(db, "notes", route.params.id);
      await deleteDoc(noteDoc);
    }
    navigation.goBack();
  };

  const onPress = async () => {
    if (route.params) {
      const noteDoc = doc(db, "notes", route.params.id);
      await updateDoc(noteDoc, { content: note });
      console.log("save");
    } else if (note !== null && note !== "") {
      const notesCol = await collection(db, "notes");
      await addDoc(notesCol, { content: note }).then((err) => {
        console.log(err);
      });
    }
    navigation.goBack();
  };
  const ref = useRef(null);

  useEffect(() => {
    if (route.params) {
      setNote(route.params.content);
    }
    ref.current.focus();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: "rgba(36, 39, 54, 0.91)",
          flex: 1,
          position: "relative",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "rgba(36, 39, 54, 1)",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Ionicons
              name="arrow-back"
              size={32}
              color="#fff"
              style={{
                marginLeft: 10,
                marginTop: Platform.OS === "ios" ? 30 : null,
              }}
            />
          </TouchableOpacity>
          {route.params && (
            <TouchableOpacity onPress={onDelete} style={{}}>
              <Ionicons
                name="trash"
                size={32}
                color="#ff4747d8"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          ref={ref}
          style={styles.Text}
          multiline
          onChangeText={(e) => setNote(e)}
          placeholder={"New Note....."}
          placeholderTextColor={"#ffffff39"}
          value={note}
        ></TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontFamily: "ChangaMedium",
    fontSize: 30,
    color: "#FFF",
  },
});
