/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, ScrollView} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
// import CustomDropDown from '../../components/CustomDropDown/CustomDropDown';
import LogTypeImg from  "../../../assets/images/jobType.png";

const AddPostsProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onAddeProviderPressed= ()=>{
    console.warn("get started")
  
    navigation.navigate('ProviderMyPosts');

  }

  return (
    <ScrollView>
    <View style={Styles.root}>
    <Text style={Styles.tittle}>Add Posts</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder="Tittle"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Company"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Working Mode"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Select Job Type"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Select Location"
      />
      <TextInput
        style= {Styles.inputs}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
      />

      <TextInput
        style= {Styles.inputs}
        placeholder="Image"
        multiline={true}
        numberOfLines={4}
      />

      {/* <CustomDropDown/> */}

      <CustomButton text="Post" onPress={onAddeProviderPressed}/>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  root: {
    // backgroundColor:'white',
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 16     ,
    color: '#3E4F88',
    width: '80%',
    marginVertical: 20
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

export default AddPostsProviderscreen