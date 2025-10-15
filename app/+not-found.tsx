import {View, Text, StyleSheet} from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{title: "Oops! Not Found"}}/>
        <View style={styles.container}>
          <Text style={styles.text}> 404 - Not Found </Text>
          <Link href="/index" style={styles.button}>Go To Home</Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1e90ff',
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
    },
})
