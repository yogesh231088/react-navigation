import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    // const greeting="Hi there!";
    // const greet=<Text>Hello to you!</Text>;
    const name="Yogesh";

    return (
        <View>
            {/* <Text style={styles.textStyle}>This is the Components Screen</Text> */}
            {/* <Text>{greeting}</Text>
            {greet} */}
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;