import { React, useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [cn, setCn] = useState(0);
  const color = [
    "rad",
    "blue",
    "skyblue",
    "putple",
    "yellow",
    "grey",
    "black",
    "pink",
    "hotpink",
    "brown",
    "green",
    "orange",
    "coral",
    "indigo",
  ];

  const checkHandler = () => {
    const ran = Math.floor(Math.random() * 14);
    if (ran === cn) {
      checkHandler();
    } else {
      return setCn(ran);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: color[cn],
          margin: 10,
          borderRadius: 8,
        }}
      ></View>
      <View>
        <Button
          style={{
            color: "#000",
          }}
          title="버튼"
          onPress={() => checkHandler()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
