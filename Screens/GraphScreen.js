import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, Image, Alert } from 'react-native';
import LineGraph from '../Components/LineGraph';
import { NiceButton } from '../Components/NiceButton';


export default function GraphScreen({navigation, route}){

const { labels, data } = route.params;

    return (
    <View>
     <LineGraph data={data} labels={labels}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#dcf8fb',

  },
  top:{
      alignSelf: 'flex-end',
      backgroundColor: 'white',

  },
  middle:{
      flex: 0.15,
      backgroundColor: 'beige',
      borderWidth: 3,
  },
  bottom:{
      flex: 0.3,
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  },
  text:{
      fontSize: 15,
      textAlign: 'center',
      color: 'black',
  },
});
