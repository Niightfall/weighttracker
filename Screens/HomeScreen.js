/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NiceButton } from '../Components/NiceButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTextinput from '../Components/MyTextinput';

export default function HomeScreen({navigation}){
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);

    const saveLabels = async () => {
      try {
        await AsyncStorage.setItem('labels', JSON.stringify(labels));
        console.log(labels + "has been saved to storage.")
      } catch (e) {
        console.log(e);
      }
    };
    const loadLabels = async () => {
      try {
          const l = await AsyncStorage.getItem('labels');
          if(l!=null){
          setLabels(JSON.parse(l));
          console.log(JSON.parse(l) + "has been loaded from storage.")
          }
      } catch (e) {
        console.log(e);
      }
    };

    const saveData = async () => {
      try {
        await AsyncStorage.setItem('data', JSON.stringify(data));
        console.log(data + "has been saved to storage.")
      } catch (e) {
        console.log(e);
      }
    };
    const loadData = async () => {
      try {
          const d = await AsyncStorage.getItem('data');
          if(d!=null){
          setData(JSON.parse(d));
          console.log(JSON.parse(d) + "has been loaded from storage.")
          }
      } catch (e) {
        console.log(e);
      }
    };
    const onClear = () => {
      setLabels([]);
      setData([]);
      AsyncStorage.clear();
    }

    useEffect(() => {
      loadLabels();
      loadData();
    }, []);

    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let currentDate = date+"."+(month+1)+"."+year;

    const [number, onChangeNumber] = useState(null);

    return (
     <View style={styles.container}>
      <View style={styles.containerLogo}>
      <Text style = {styles.text}>Do your thing</Text>
      <Image 
      source={require('../Assets/Muscle.png')} 
      style={styles.image}  
      />
      </View>
      <View style={styles.containerInput}>
      <MyTextinput number={number} onChangeNumber={onChangeNumber}/>
      <NiceButton 
        title="Add Data"
        onPress={()=>{labels.push(currentDate);
                      data.push(parseFloat(number));
                      saveLabels();
                      saveData();
                      console.log(labels);
                      console.log(data);
                      onChangeNumber('');       
        }}/>
      {/*         <NiceButton  //if a reset should ever be needed
        title="Reset Labels"
        onPress={()=>onClear()}/> */}
      </View>
      <View style={styles.containerInput}>
      <NiceButton 
        title="All Time Progress"
        onPress={()=>navigation.navigate('GraphAll', {labels: labels, data: data})}/>
      <NiceButton 
        title="Recent Progress"
        onPress={()=>navigation.navigate('GraphRecent', {labels: labels, data: data})}/>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'silver',
  },
  containerLogo:{
      flex: 0, 
      flexDirection: 'column', 
      alignItems:'center', 
      justifyContent: 'center',
      paddingTop: 100,
      paddingBottom: 300,
  },
  containerInput:{
    flex: 0, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
  },
  image:{
      height: 100,
      width: 100,
      backgroundColor: 'transparent',
  },
});
