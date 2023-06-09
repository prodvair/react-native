import React, { useState } from "react";
import { View } from "react-native";
import Counter from "./Counter";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";

export default function App() {
  const [count, setCount] = useState(0);
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const Touch = () => {
    setCount((prevCount) => ++prevCount);
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress} style={styles.button}>
        Switch Theme
      </Button>
      <Counter/>
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
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
}));
