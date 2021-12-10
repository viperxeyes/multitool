import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { images } from "./WeatherIcon";

export default function Home() {
  const [data, setData] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchCoord = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocation(location);
    const api = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
    });

    api
      .get(
        `/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=134fa6c56b2b59752a740898e4522412&units=metric`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);

        return error.response;
      });
  };

  useEffect(() => {
    fetchCoord();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "rgba(36, 39, 54, 0.91)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.country}>{data.sys.country}</Text>
          <Text style={styles.country}>{data.name}</Text>
          <Text style={styles.tempText}>{Math.round(data.main.temp)} C°</Text>
          <Image
            source={images.image[data.weather[0].icon]}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
          <Text style={styles.description}>
            {data.weather[0].description.toUpperCase()}
          </Text>
        </View>
      ) : (
        <View>
          <ActivityIndicator
            style={{ marginTop: "5%" }}
            size="large"
            color="rgba(255, 238, 6, 0.651)"
          />
          <Text style={{ fontSize: 25, color: "#FFF" }}>Loading...</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  tempText: {
    fontFamily: "ChangaBold",
    fontSize: 40,
    color: "#FFF",
  },
  description: {
    fontFamily: "ChangaBold",
    fontSize: 30,
    color: "#FFF",
    marginTop: 10,
  },
  country: {
    fontFamily: "ChangaBold",
    fontSize: 30,
    color: "#FFF",
    marginTop: -10,
    marginLeft: 10,
  },
});
