import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function DataScreen1({navigation, route}){

const { labels, data } = route.params;

const labelRecent = labels.slice(labels.length-7, labels.length)
const dataRecent7 = data.slice(data.length-7, data.length)
const average7days = dataRecent7.reduce((a,b) => a+b, 0)/dataRecent7.length;
const average7daysrounded = Math.floor(average7days*100)/100;

const dataRecent7to14 = data.slice(data.length-14, data.length-7);
const average7to14 = dataRecent7to14.reduce((a,b) => a+b, 0)/dataRecent7to14.length;
const average7to14rounded = Math.floor(average7to14*100)/100;

const dataRecent30 = data.slice(data.length-30, data.length);
const average30days = dataRecent30.reduce((a,b) => a+b, 0)/dataRecent30.length;
const average30daysrounded = Math.floor(average30days*100)/100;

    return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Datenübersicht </Text>
        <Text style={styles.text2}>Durchschnittsgewicht der ... </Text>
        <Text style={styles.text}>letzten 30 Tage: {"\t\t\t\t\t"} {average30daysrounded} kg</Text>
        <Text style={styles.text}>vorletzten 7 Tage: {"\t\t\t"} {average7to14rounded} kg</Text>
        <Text style={styles.text}>letzten 7 Tage: {"\t\t\t\t\t\t\t"} {average7daysrounded} kg</Text>
        <Text style={styles.text2}>{"\n"}Differenz der ... </Text>
        <Text style={styles.text}>letzten 2 Wochen: {"\t\t\t\t\t\t\t"} 
                                {average7daysrounded - average7daysrounded} kg</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'silver',
    },
    headerText:{
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        paddingTop: 20,
        paddingBottom: 50,
    },
    text:{
        fontSize: 18,
        textAlign: 'left',
        color: 'black',
        paddingLeft: 25,
        lineHeight: 30,
    },
    text2:{
        fontSize: 25,
        textAlign: 'left',
        color: 'black',
        paddingLeft: 15,
        lineHeight: 50,
    },
    image:{
        height: 100,
        width: 100,
        backgroundColor: 'transparent',
    },
  });
  