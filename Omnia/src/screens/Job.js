import React from 'react';
import {Text,StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInput from 'react-native'
import jobstyle from "./jobstyles.js"
const Job= () => {

  return (
    <>
      <KeyboardAwareScrollView>
      <Text style={{fontSize:12}}> Job Title:</Text>
      <TextInput>
      style = {jobstyle.input}
      placeholder = {"Job Title: "}


      </TextInput>



      
      </KeyboardAwareScrollView>
      
    </>
  );
};

const styles = StyleSheet.create({
});

export default Job;