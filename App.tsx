import {
  StyleSheet,
  RefreshControl,
  Text,
  View,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useCallback } from "react";

export default function App() {
  const colors = [
    "antiquewhite",
    "aqua",
    "brown",
    "cadetblue",
    "cornflowerblue",
    "crimson",
    "darkorange",
    "indigo",
    "maroon",
    "sienna",
  ];

  const [color, setColor] = useState<string | undefined>(undefined);

  const [refreshing, setRefreshing] = useState(false);

  function getRandomColors() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // getRandomColors(colors);
    setColor(getRandomColors());
    setTimeout(() => {
      setRefreshing(false);
    }, 20);
  }, []);

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: color, height: "100%" }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: color,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text>Pull down from top to change the backgroundColor </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
