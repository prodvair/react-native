import React, { useState } from "react";
import { View } from "react-native";
import { makeStyles, Text, Button } from "@rneui/themed";

export default function App() {
  const [count, setCount] = useState(0);
  const styles = useStyles();

  const Touch = () => {
    setCount((prevCount) => ++prevCount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Touch count: {count}</Text>
      <Button onPress={Touch} style={styles.button}>
        Touch
      </Button>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background2,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    marginVertical: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
  },
}));
