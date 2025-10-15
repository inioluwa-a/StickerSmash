import {Text, View, StyleSheet} from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Sticker Smash</Text>
      <Text style={styles.text}>
        Sticker Smash is a fun and interactive way to express yourself using stickers!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
