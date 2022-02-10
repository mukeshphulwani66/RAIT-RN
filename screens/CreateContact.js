import { View, Text,Keyboard,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';


const CreateContact = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [phone,setPhone] = useState("")
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <View style={styles.con}>
      <TextInput
       label="First Name"
       mode="outlined"
       value={firstName}
       onChangeText={text => setFirstName(text)}
      />
      <TextInput
       label="Last Name"
       mode="outlined"
       value={lastName}
       onChangeText={text => setLastName(text)}
      />
      <TextInput
       label="phone"
       mode="outlined"
       keyboardType="number-pad"
       value={phone}
       onChangeText={text => setPhone(text)}

      />
      <Button mode="contained" onPress={()=>pickImage()}>Pick Image</Button>
      <Button mode="contained" onPress={()=>{
       console.log(firstName,lastName,phone,image)
      }}>Save contact</Button>
    </View>
  )


}


const styles = StyleSheet.create({
  con:{
   
    height:"60%",
    marginHorizontal:10,
    justifyContent:"space-around"
  }
})

export default CreateContact