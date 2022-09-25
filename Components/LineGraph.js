import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";


function LineGraph({labels, data}) {

    const screenWidth = Dimensions.get("window").width;
    const screenHight = Dimensions.get("window").height;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.3,
        color: (opacity = 1) => `rgba(4, 97, 20, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    let dataset = {
        labels: labels, //eventuell mit slice begrenzen.
        datasets: [
          {
            data: data, //eventuell mit slice begrenzen.
            color: (opacity = 1) => `rgba(237, 12, 21, ${opacity})`, // optional
            strokeWidth: 2, // optional
        
          }
        ],
    };
    
    return (

        <View>
            <Text style={styles.text}>{"Progress"}</Text>
            <LineChart
                data={dataset}
                width={screenWidth}
                height={screenHight}
                chartConfig={chartConfig}
                yAxisSuffix='kg'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'space-between',
        backgroundColor: '#deedfc',
        padding: 10,
        margin: 10,
    },
    top:{
        flex: 0.3,
        backgroundColor: 'grey',

    },
    middle:{
        flex: 0.2,

    },
    bottom:{
        flex: 0.3,
        backgroundColor: 'pink',

    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
});

export default LineGraph;
