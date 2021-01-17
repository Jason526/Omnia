import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';


const RegistrationScreen= ({navigation}) => {

  return (
    <>
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Text style={{fontSize:100}}>click for Home</Text>
      </TouchableOpacity>      
    </>
  );
};

const styles = StyleSheet.create({
});

export default RegistrationScreen;