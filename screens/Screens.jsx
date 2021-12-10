import React from "react";
import AddEditNote from "../components/AddEditNote";
import Compass from "../components/Compass";
import Home from "../components/Home";
import NotesHome from "../components/NotesHome";

export const HomeScreen = ({ navigation, route }) => {
  return <Home navigation={navigation} route={route} />;
};

export const NotesScreen = ({ navigation, route }) => {
  return <NotesHome navigation={navigation} route={route} />;
};

export const CompassScreen = ({ navigation, route }) => {
  return <Compass navigation={navigation} route={route} />;
};
