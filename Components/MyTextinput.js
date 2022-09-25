import * as React from 'react';
import { StyleSheet, TextInput} from 'react-native';



function MyTextinput({number, onChangeNumber}) {
  

  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        multiline={true}
        numberOfLines={1}
        placeholderTextColor="green"
        keyboardType='numeric'
        placeholder='Enter current Weight (kg)'
        textAlign='center'
        />
        
  );
}


const styles = StyleSheet.create({
    input: {
      margin: 15,
      borderWidth: 1,
      padding: 10,
      color: 'black',
      backgroundColor:'white',
      textAlignVertical: 'center',
      textAlign:'center',
      fontSize: 20,
    },
  });

export default MyTextinput;
