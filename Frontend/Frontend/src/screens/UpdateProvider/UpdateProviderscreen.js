/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, ScrollView} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/jobType.png";

const UpdateProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onUpdateProviderPressed= ()=>{
    console.warn("get started")
  
    navigation.navigate('ProviderProfile');

  }

  return (
    <ScrollView>
    <View style={Styles.root}>
      <Image source={LogTypeImg} style={[Styles.logo  ,{Height:  Height*0.1}]} resizeMode="contain" />
      <TextInput
        style= {Styles.inputs}
        placeholder="Company Name"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Email Address"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Phone Number"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Phone Number"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Paasword"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Address"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Description"
      />

      <CustomButton text="UPDATE" onPress={onUpdateProviderPressed}/>
    </View>
    </ScrollView>
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
    borderColor: '#3E4F88',
    borderWidth: 1,
    marginTop:10,
  }
})

export default UpdateProviderscreen