import React , {useEffect,useState,lazy,Suspense} from 'react'
import {db} from "../Firebase"
import {collection,addDoc,onSnapshot,doc,query} from "firebase/firestore";
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from "use-local-storage";

export default function Loading() {
  return (
    <div>Loading ....</div>
  )
}
