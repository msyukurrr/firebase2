import { View, Text, Button, Image, TextInput } from 'react-native';
import { collection, getDocs, getFirestore, addDoc, setDoc } from "firebase/firestore";
import { useState } from 'react';

export default function Register(){

    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [avat, setAvat] = useState("");

    const AddUser = async () => {
        const db = getFirestore();

        const docRef = await addDoc(collection(db, "users"), {
            fullname: fn,
            age: age,
            avatar: avat,
          });
          console.log("Document written with ID: ", docRef.id);
        }

    return (
        <View>
            <TextInput placeholder="fullname" onChangeText={(txt)=>setFN(txt)}></TextInput>
            <TextInput placeholder="age" onChangeText={(txt)=>setAge(txt)}></TextInput>
            <TextInput placeholder="avatar" onChangeText={(txt)=>setAvat(txt)}></TextInput>
            <Button title="Add" onPress={()=>AddUser()} />
        </View>
    )
}