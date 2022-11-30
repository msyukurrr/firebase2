import { View, Text, Button, Image, TextInput } from 'react-native';
import { collection, getDocs, getFirestore, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';

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
            <TextInput value={fn} placeholder="fullname" onChangeText={(txt)=>setFN(txt)}></TextInput>
            <TextInput value={age} placeholder="age" onChangeText={(txt)=>setAge(txt)}></TextInput>
            <TextInput value={avat} placeholder="avatar" onChangeText={(txt)=>setAvat(txt)}></TextInput>
            <Button title="Add" onPress={()=>AddUser()} />
        </View>
    )
}