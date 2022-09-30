
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const NiceButton = ({title, onPress}) => {
    return (
            <Pressable
                onPress={onPress}
                style={({pressed}) => [
                    {
                    backgroundColor: pressed
                    ? 'rgb(141, 141, 141)'
                    : '#0033cc',
                },
                styles.button,
                ]}>
                    <Text style={styles.text}>{title}</Text>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    button:{
        height: 50,
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding:10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
