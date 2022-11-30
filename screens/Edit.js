import { View, Text, Button, Image, TextInput } from 'react-native';
import { collection, getDocs, getFirestore, addDoc, setDoc, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';

export default function Edit(){

    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [avat, setAvat] = useState("");


    const GetUser = async () => {
        const db = getFirestore();
        const docRef = doc(db, "users", "5rZGsUYVaj5YZuMs0XUQ");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const user = docSnap.data();
            setFN(user.fullname);
            setAge(user.age);
            setAvat(user.avat);
        }else{
            console.log("No such document!");
        }
    }

    useEffect(()=>{
        GetUser();
    }, []);

    const EditUser = async () => {
        const db = getFirestore();

       // const docRef = await addDoc(collection(db, "users"), {
          //  fullname: fn,
         //   age: age,
         //   avatar: avat,
        //  });
        //  console.log("Document written with ID: ", docRef.id);
      }

    return (
        <View>
            <TextInput value={fn} placeholder="fullname" onChangeText={(txt)=>setFN(txt)}></TextInput>
            <TextInput value={age} placeholder="age" onChangeText={(txt)=>setAge(txt)}></TextInput>
            <TextInput value={avat} placeholder="avatar" onChangeText={(txt)=>setAvat(txt)}></TextInput>
            <Button title="Update" onPress={()=>EditUser()} />
        </View>
    )
}