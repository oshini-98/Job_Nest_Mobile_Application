/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/jobType.png";

const LoginProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onDashboardProviderPressed= ()=>{
    console.warn("get started")
  
  navigation.navigate('ProviderDashboard');
  
  }

  return (
    <View style={Styles.root}>
      <Image source={LogTypeImg} style={[Styles.logo  ,{Height:  Height*0.1}]} resizeMode="contain" />
      <TextInput
        style= {Styles.inputs}
        placeholder="Email"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Password"
      />
      <CustomButton text="LOGIN" onPress={onDashboardProviderPressed}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  root: {
    backgroundColor:'white',
    alignItems: 'center',
  },
  logo: {
    marginTop:10,
    width: '60%',
    maxWidth:300,
    maxHeight:350,
  },
  inputs: {
    padding:8,
    width: '80%',
    marginVertical:10,
    alignItems:'center',
    borderRadius:10,
    borderColor: 'gray',
    borderTopWidth: 1,
    borderLeftWidth:2,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    marginTop:10,
    backgroundColor:'white',
  }
  })

export default LoginProviderscreen