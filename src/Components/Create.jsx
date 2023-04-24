import React , {useEffect,useState} from 'react'
import {db} from "../Firebase"
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import {collection,addDoc,onSnapshot,doc,query,updateDoc,setDoc} from "firebase/firestore";
import Friend from './Friend';



export default function Create() {
const [user,setUser]=useState('')
const [err,setErr]= useState('')
const [ creatingRoom,setCreatingRoom] = useState('')
const [numberCss,setNumberCss] = useState( Math.floor(Math.random() *3+1))
const [gameId,setGameId] = useState('')


const arr= [ {name:"zero",id:0},
{name:"one",id:1},
{name:"two",id:2},
]

const navigate = useNavigate()


useEffect(() =>{
    setGameId(localStorage.getItem('name'))
  },[gameId])

  useEffect(() =>{
    setGameId(localStorage.getItem('lobby'))
  },[user])


function handleClick(){
   if (user === ''){
     setErr('Username needed!!')
    setTimeout(() => {setErr("")},4000)
   } else {
    setCreatingRoom('Creating lobby')
    const colRef=collection(db,'game'+user); // creates collection
    const docRef = doc(colRef, 'game'+user); // creates document
    setDoc(docRef, { setOne:{one:'',id:1}
    ,setTwo:{two:'',id:2}
    ,setThree:{Three:'',id:3}
    ,setFour:{four:'',id:4}
    ,setFive:{five:'',id:5}
    ,setSix:{six:'',id:6}
    ,setSeven:{seven:'',id:7}
    ,setEight:{eight:'',id:8}
    ,setNine:{nine:'',id:9}
    ,Disabled:{Disabled:false}
    ,join:{ lobby:user+'friend',friend:'',joined:false,host:user,}
    
    
    })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
   setTimeout(() => {
    navigate("/game")
   },3000)
   }
}


useEffect(() => {
    localStorage.setItem('name', user)
},[user])


useEffect(() => {
  localStorage.setItem('code', user)
},[user])








  return (<div className='homepage-div'
     style={numberCss === 1? {backgroundPosition:'left'} : {backgroundPosition:'right'}}>
    <h2 className='simple-h2'>Tic Tac Toe Game</h2>

    <div className='create-room'> 
        <h2 className='h2'> Create room</h2> 
             <div className='creatediv'>
             <input type="text" onChange={(e) => setUser(e.target.value)} />
            <button className='btnstart' style={{marginTop:"20px"}} 
            onClick={handleClick}> Create lobby </button> </div>

            <div style={{height:'30px',marginBottom:'20px'}}>
            <p> {err} </p>
             <p> {creatingRoom} </p>
              </div> 
             </div>

            <div className='joins-room'> <h2 className='h2'> Join Room</h2> 
            
            <Friend/>
            </div>
        
  </div>)
}


