import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';


const LoginScreen= ({navigation}) => {

  return (
    <>
    <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
      <Text style={{fontSize:100}}>click for RegistrationScreen</Text>
      </TouchableOpacity>      
    </>
  );
};

const styles = StyleSheet.create({
});

export default LoginScreen;