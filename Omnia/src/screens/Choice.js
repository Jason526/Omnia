import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function choice({navigation}) {

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Main")}
        style={styles.roundButton1}>
        <Text>I'm a button</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate("Main")}
        style={styles.roundButton2}>
        <Text>I'm another button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default choice;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
});