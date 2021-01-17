import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native';
import SearchBar from 'react-native-search-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Home= ({navigation}) => {
  const search1 = React.createRef();
  const [value,setValue]=useState("");

  return (
    <>
      <KeyboardAwareScrollView
      style={{backgroundColor: "#fff",paddingTop:150}}
      >

      <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <Text style={{fontSize:30, textAlign:'center',paddingTop:10}}>Choose an Address:</Text>
      <Text style={{lineHeight:10}}>{"\n"}</Text>


      <View style={{flexDirection:'row',alignContent:"space-between",paddingBottom:30,paddingLeft:10}}>

      <View style={{width:"80%",backgroundColor:"#f0f0f0",borderWidth:3,flexDirection:'row',borderRadius:10}}>
      <Image source={require("../../assets/loc.png")} style={{width:50,height:50}}/>
      <Text style={{lineHeight:30,fontSize:20,paddingTop:10}}>Current Address:</Text>
      </View>

        <TouchableOpacity style={{paddingLeft:20}}>
        <Image source={require("../../assets/add_button2.png")} style={{width:40,height:40,marginTop:7}}/>
        </TouchableOpacity>
      </View>

      <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}
      onPress={() => navigation.navigate('Job')}
      >
      <Image source={require("../../assets/tempButton.png")} style={{width:200,height:200,resizeMode:'contain',alignItems:'center'}}/>
      </TouchableOpacity>

      <SearchBar
          text={value}
          ref={search1}
          barTintColor="#ffffff"
          placeholder="Search"
          onSearchButtonPress={() => search1.current.blur()}
          onCancelButtonPress={() => search1.current.blur()}
             />
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default Home;