/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, ScrollView} from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// import axios from "axios";

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/jobType.png";
// import client from '../../api/client';

const RegisterProviderscreen = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNo,setPhoneNo] = useState('')
  const [address,setAddress] = useState('')
  const [password,setPassword] = useState('')
  const [description,setDescription] = useState('')

  // const submitData = () => {
  //   fetch("http://localhost:8080/company/signupCompany", {
  //     method: "post",
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       phoneNo,
  //       address,
  //       password,
  //       description
  //     })
  //   })
  //   .then(res=>res.json())
  //   .then(data => {
  //     console.log(data);
  //     alert('Company Registered');
  //   })
  // }

  const submitData = () => {

    // if (name === '' || email=== '' || phoneNo==='' || address==='' || password==='' || description==='')
    // {
    //   alert("All fields are required");
    //   return;
    // }
    // await axios.post("http://192.168.1.130:8080/company/addCompany",{name, email, phoneNo, address, password, description});
    // alert("Company Added Successful");
    // navigation.navigate('ProviderLOG');

    // axios.post('http://localhost:8080/company/addCompany', {
    //     name:name,
    //     email:email,
    //     phoneNo:phoneNo,
    //     address:address,
    //     password:password,
    //     description:description
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    navigation.navigate('ProviderLOG');

  }

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();
  
  // const onAddeProviderPressed= ()=>{
  //   console.warn("get started")
  //   submitData();
  
  //   navigation.navigate('ProviderLOG');

  // }

  return (
    <ScrollView>
    <View style={Styles.root}>
    <Image source={LogTypeImg} style={[Styles.logo  ,{Height:  Height*0.1}]} resizeMode="contain" />
      <TextInput
        label='name'
        style= {Styles.inputs}
        value={name}
        // theme={theme}
        // mode='outlined'
        placeholder="Company Name"
        onChange={text => setName(text)}
      />
      <TextInput
        label='email'
        style= {Styles.inputs}
        value={email}
        placeholder="Email Address"
        onChange={text => setEmail(text)}
      />
      <TextInput
       label='phoneNo'
        style= {Styles.inputs}
        value={phoneNo}
        placeholder="Phone Number"
        onChange={text => setPhoneNo(text)}
      />
      <TextInput
        label='address'
        style= {Styles.inputs}
        value={address}
        placeholder="Address"
        onChange={text => setAddress(text)}
      />
      <TextInput
        label='password'
        style= {Styles.inputs}
        value={password}
        placeholder="Password"
        onChange={text => setPassword(text)}
      />
      <TextInput
        label='description'
        style= {Styles.inputs}
        value={description}
        placeholder="Description"
        onChange={text => setDescription(text)}
      />

      <CustomButton text="REGISTER" onPress={submitData}/>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  root: {
    // backgroundColor:'white',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    maxWidth:200,
    maxHeight:225,
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

export default RegisterProviderscreen