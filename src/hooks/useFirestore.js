/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { collection, getDocs, where,query, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { nanoid } from 'nanoid'

export const useFirestore = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});

    const getData = async () =>{
      try {
        setLoading(prev => ({...prev, getData:true}))
        const dataRef = collection(db, "url");
        const q = query(dataRef, where("uid", "==", auth.currentUser.uid));
        
        const querySnapshot = await getDocs(q);
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setData(dataDB)
      } catch (error) {
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(prev => ({...prev, getData:false}))
      }
    }

    const addData = async(url) =>{
      try {
        setLoading(prev => ({...prev, addData:true}))
        const newDoc= {
          enabled: true,
          nanoid: nanoid(6),
          origin: url,
          uid: auth.currentUser.uid
        }
        const docRef = doc(db, 'url', newDoc.nanoid)
        await setDoc(docRef, newDoc)
        setData([...data, newDoc]);//introducir nueva data a newDoc
      } catch (error) {
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(prev => ({...prev, addData:false}))
      }
    }

    const deleteData = async (nanoid)=>{
      try {
        setLoading(prev => ({...prev,[nanoid]:true}))
        const docRef = doc(db, 'url', nanoid)
        await deleteDoc(docRef)
        setData(data.filter(item => item.nanoid !== nanoid))
      } catch (error) {
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(prev => ({...prev,[nanoid]:false}))
      }
    }

    const updateData = async (nanoid, newOrigin)=>{
      try {
        setLoading(prev => ({...prev,updateData:true}))
        const docRef = doc(db, 'url', nanoid)
        await updateDoc(docRef, {origin: newOrigin})
        setData(data.map(item => item.nanoid  === nanoid ? ({...item, origin: newOrigin}):item)) //actualizar la data localmente
      } catch (error) {
        console.log(error)
        setError(error.message)
      }finally{
        setLoading(prev => ({...prev,updateData:false}))
      }
    }
  return {
    data, 
    error, 
    loading, 
    getData,
    addData,
    deleteData,
    updateData
  }
}
