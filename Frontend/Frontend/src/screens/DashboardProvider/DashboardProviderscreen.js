/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, Button, Pressable} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/user.jpg";

const DashboardProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onProfilePressed= ()=>{
    console.warn("get started")
  
    navigation.navigate('ProviderProfile');
  
  }


  const onMyPostsPressed= ()=>{
    console.warn("get started")
  
    navigation.navigate('ProviderMyPosts');
  
  }

  return (
    <View style={Styles.root}>
      <View style={Styles.content}>
      <Image source={LogTypeImg} style={[Styles.userImg  ,{Height:  Height*0.1}]} resizeMode="contain" />

      <View style={Styles.txtView}>
      <Text style={Styles.txt}>Sachini Wijesinghe</Text>
      <Text style={Styles.txt}>Log out</Text>
      </View>

      <Pressable style={Styles.btn} onPress={onProfilePressed}>
        <Text style={Styles.txt}>Profile</Text>
      </Pressable>

      <Pressable style={Styles.btn} onPress={onMyPostsPressed}>
        <Text style={Styles.txt}>My Posts</Text>
      </Pressable>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  root: {
    backgroundColor:'white',
    // alignItems: 'center',
  },
  content: {
    alignItems:'center',
    width: '70%',
    backgroundColor: '#3E4F88'
  },
  userImg: {
    width: '60%',
    maxWidth:140,
    maxHeight:140,
    borderRadius: 100,
    marginTop: 50
  },
  txtView:{
    alignItems: 'center',
    marginTop:10,
    marginBottom:60
  },
  txt:{
    color: 'white',
    fontWeight:'bold',
    marginVertical: 5
  },
  btn: {
    padding:10,
    width: '100%',
    alignItems:'center',
    borderColor: 'white',
    borderTopWidth:1,
    borderBottomWidth:1
  }
  })

export default DashboardProviderscreen