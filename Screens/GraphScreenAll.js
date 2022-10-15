import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LineGraph from '../Components/LineGraph';


export default function GraphScreen1({navigation, route}){

const { labels, data } = route.params;

const noLabel = [labels[0], labels[labels.length-1]]

    return (
    <View>
     <LineGraph 
     data={data} 
     labels={noLabel}
     dots={false}
     />
    </View>
    );
}

