import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export const NiceButton = ({...props}) => {
  return (
    <Pressable onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
