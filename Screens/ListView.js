import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';


export default function ListView({navigation, route}){

const { labels, data } = route.params;

const renderArrays = () => {
    var labelsAndData = labels.map((e, i) => e + ':\t\t' + data[i]);
    return labelsAndData.map((item, index) => <Text key={index} style={styles.text2}>{item} kg</Text>);
}

    return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'flex-start'
        }}>
            <Text style={styles.headerText}>Total Entries: {labels.length}</Text>
            {renderArrays()}
    </ScrollView>
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
  