import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native';
import SearchBar from 'react-native-search-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const App= () => {
  const search1 = React.createRef();
  const [value,setValue]=useState("");

  return (
    <>
      <KeyboardAwareScrollView
      style={{backgroundColor: "#fff",paddingTop:150}}
      >
      <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <Text style={{fontSize:30, textAlign:'center',paddingTop:10}}>Choose an Address</Text>
      <Text style={{lineHeight:10}}>{"\n"}</Text>
      <View style={{flexDirection:'row',alignContent:"space-between",paddingBottom:30}}>
      <View style={{width:"80%",paddingLeft:10}}>
        <SearchBar
          text={value}
          ref={search1}
          barTintColor="#ffffff"
          placeholder="Current Address:"
          onSearchButtonPress={() => search1.current.blur()}
          onCancelButtonPress={() => search1.current.blur()}
             />
        </View>
        <TouchableOpacity style={{paddingLeft:20}}>
      
          <Image source={require("./assets/add_button.png")} style={{width:50,height:50}}/>
        </TouchableOpacity>
      </View>
      <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}>
      <Image source={require("./assets/tempButton.png")} style={{width:200,height:200,resizeMode:'contain',alignItems:'center'}}/>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
