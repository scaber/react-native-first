import React from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';

export default function App() {
  state = {
    placeName: ''
  }
  placeNameChangedHandler =(event) => {
 alert(event)
  }
  return (
    <View style={styles.container}>
      <TextInput
      style={{width:300, borderColor:"black",borderWidth:1}}
      placeholder="An awesome there"
      value={this.state.placeName} 
      onChangeText={this.placeNameChangedHandler}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
