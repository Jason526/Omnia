import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Choice')}>
        <Text style={{fontSize: 100}}>choice</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
