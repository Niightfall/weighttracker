import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LineGraph from '../Components/LineGraph';


export default function GraphScreen2({navigation, route}){

const { labels, data } = route.params;

const labelRecent = labels.slice(labels.length-5, labels.length)
const dataRecent = data.slice(data.length-5, data.length)

    return (
    <View>
     <LineGraph
     data={dataRecent}
     labels={labelRecent}
     />
    </View>
    );
}

