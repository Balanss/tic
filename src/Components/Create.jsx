import React , {useEffect,useState} from 'react'
import {db} from "../Firebase"
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import Friend from './Friend';



export default function Create() {
const [user,setUser]=useState('')
const [err,setErr]= useState('')
const [ creatingRoom,setCreatingRoom] = useState('')
const [numberCss,setNumberCss] = useState( Math.floor(Math.random() *3+1))
const [gameId,setGameId] = useState('')


const navigate = useNavigate()


useEffect(() =>{
    setGameId(localStorage.getItem('name'))
  },[gameId])


function handleClick(){
   if (user === ''){
     setErr('Please type in a name to create lobby')
    setTimeout(() => {setErr("")},4000)
   } else {
    setCreatingRoom('Creating a lobby...Please wait')
    const colRef=collection(db,'game'+user)
   addDoc(colRef, {
    name:user,
    joined:"false",
    playerTwo:'friend',
    code:'game'+user,
    zero:"",
one:"",
two:"",
three:"",
four:"",
five:"",
six:"",
seven:"",
eight:"",
nine:"",
PlayerOne:"X",
PlayerTwo:"O",
Disabled:true,
host:user,
friend:user+'friend'
   })

   setTimeout(() => {
    navigate("/game")
   },3000)
   }
}


useEffect(() => {
    localStorage.setItem('name', user)
},[user])


useEffect(() => {

 
  
}, []);




  return (<div className='homepage-div'
     style={numberCss === 1? {backgroundPosition:'left'} : {backgroundPosition:'right'}}>
    <h2 className='simple-h2'>Tic Tac Toe Game</h2>

    <div className='create-room'> 
        <h2 className='h2'> Create room 
            </h2> 
             <p> {err} {creatingRoom} </p>
             <div>
             <input type="text" onChange={(e) => setUser(e.target.value)} />
            <button className='btnstart' style={{marginTop:"20px"}} 
            onClick={handleClick}> Create lobby </button> </div>
            
             </div>

            <div className='joins-room'> <h2 className='h2'> Join Room</h2> 
            <Friend/>
            </div>
         
             
  </div>)
}
