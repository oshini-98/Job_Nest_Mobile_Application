/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, ScrollView} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/user.jpg";

const ProfileProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onUpdatePressed= ()=>{
    console.warn("get started")
  
  navigation.navigate('ProviderUpdate');
  
  }


  const onMyPostsPressed= ()=>{
    console.warn("get started")
  
  navigation.navigate('ProviderMyPosts');
  
  }

  return (
    <ScrollView>
    <View style={Styles.root}>
      <Text style={Styles.tittle}>My Profile</Text>
      <Image source={LogTypeImg} style={[Styles.userImg  ,{Height:  Height*0.1}]} resizeMode="contain" />
   
      <Text style={Styles.profText}>Company Name</Text>
      <View style={Styles.card}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <Text style={Styles.profText}>Email Address</Text>
      <View style={Styles.card}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <Text style={Styles.profText}>Phone Number</Text>
      <View style={Styles.card}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <Text style={Styles.profText}>Password</Text>
      <View style={Styles.card}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <Text style={Styles.profText}>Address</Text>
      <View style={Styles.card}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <Text style={Styles.profText}>Description</Text>
      <View style={Styles.card1}>
        <Text style={Styles.txt}>ABC Company</Text>
      </View>

      <CustomButton text="Update" style={{backgroundColor:'#0c9182'}} onPress={onUpdatePressed}/>
      <CustomButton text="My Posts" onPress={onMyPostsPressed}/>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 20     ,
    color: 'black'
  },
  userImg: {
    width: '60%',
    maxWidth:150,
    maxHeight:150,
    borderRadius: 100,
    marginVertical: 50
  },
  profText: {
    // fontWeight: 'bold',
    color: 'black',
    fontSize:15,
    fontWeight: 'bold',
    width: '80%',
    marginBottom:10
  },
  card: {
    borderRadius: 8,
    // backgroundColor: 'gray',
    borderColor: 'gray',
    borderTopWidth: 1,
    borderLeftWidth:2,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    padding:10,
    marginBottom:20,
    width: '80%'
  },
  card1: {
    borderRadius: 8,
    // backgroundColor: 'gray',
    borderColor: 'gray',
    borderTopWidth: 1,
    borderLeftWidth:2,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    padding:10,
    marginBottom:20,
    height: 100,
    width: '80%'
  },
  txt:{
    color:'black'
  }
  })

export default ProfileProviderscreen