import React, { useState } from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";

export default function App() {
  const styles = useStyles();
  const [count, setCount] = useState(0);
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const Click = () => {
    setCount((prevCount) => ++prevCount);
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
      <Text style={styles.text}>Click count: {count}</Text>
      <Button onPress={Click}>Click</Button>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.md,
  },
}));
