import React,{useEffect,useState,lazy} from 'react'
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import {db} from "../Firebase"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Functions from './Functions';
import HR from './HR';
import useLocalStorage from 'use-local-storage';




export default function Board() {


const [gameId,setGameId] = useState('')
const [friend,setFriend] = useState(localStorage.getItem('player2'))
const [playerOne,setPlayerOne] = useState("X")
const [playerTwo,setPlayerTwo] = useState('O')
const [ lobby,setLobby]= useState('')


useEffect(() => {
  setLobby(localStorage.getItem('lobby')) 
},[])

useEffect(() => {
setGameId(localStorage.getItem('name'))
},[gameId])









const [ board,setBoard]= useState([])
  useEffect(() => {
   if(gameId !== ""){
    const getBoard = async () => {
      const colRef = (collection(db,'game'+gameId));
      const q = query(colRef);
      onSnapshot(q,(snapshot) => {
          setBoard(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
      })
      
  }
 getBoard()

   } if (gameId === ""){
    const getBoard = async () => {
      const colRef = (collection(db,lobby));
      const q = query(colRef);
      onSnapshot(q,(snapshot) => {
          setBoard(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
      });
     
  }
   getBoard()
   } 
    
 },[lobby,gameId])



 let host = gameId
let buddy = friend 


// useEffect(() => {
//   const random = Math.floor(Math.random()*2 +1)
// setRandomNumber(random)
// },[])


function handleStart() {
  board.map((board) => {
    const lobby = board.id
    const lobbyId = 'game'+board.host
    const docRef=doc(db,lobbyId,lobby);
    const payload = { Disabled : false,}
    updateDoc(docRef, payload);
  })

}

//  const count =   points.reduce((acc,current) => acc + current,0)
//  const countSum =   points.reduce((acc,current) => acc + current,0)


  function handleReset() {
    board.map((board) => {
      const lobby = board.id
      const lobbyId = 'game'+board.host
      const docRef=doc(db,lobbyId,lobby);
      const payload = { one : " ",two:"" ,three: "",four: "",five: "",six: "",seven:"",eight:"",nine:'',zero:'',Disabled: false,}
      updateDoc(docRef, payload);
     
    })

   
  }
  
function A(){
board.map((board) => {
  const lobby = board.id
  const lobbyId = 'game'+board.host
  const docRef=doc(db,lobbyId,lobby); const payload = buddy=== ''?  { zero :"X"}:{zero:"O"}; updateDoc(docRef, payload);
})



}

function B(){
  board.map((board) => {
    const lobby = board.id
    const lobbyId = 'game'+board.host
    const docRef=doc(db,lobbyId,lobby); const payload = buddy=== ''? { one : playerOne }:{one:playerTwo}; updateDoc(docRef, payload);
  })


}

function C(){
  board.map((board) => {
    const lobby = board.id
    const lobbyId = 'game'+board.host
    const docRef=doc(db,lobbyId,lobby); const payload = buddy=== ''? { two : playerOne }:{two:playerTwo}; updateDoc(docRef, payload);
  })

}

function D(){
  board.map((board) => {
    const lobby = board.id
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { three:playerOne  }: {three:playerTwo}; updateDoc(docRef, payload);
  })
}

function E(){
  board.map((board) => {
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { four: playerOne }:{ four:playerTwo}; updateDoc(docRef, payload);
  })
}

function F(){
  board.map((board) => {
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { five :playerOne  }:{five:playerTwo}; updateDoc(docRef, payload);
  })
}

function G(){
  board.map((board) => {
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { six:playerOne }:{six:playerTwo}; updateDoc(docRef, payload);
  })
}

function H(){
  board.map((board) => {
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { seven:playerOne }:{seven:playerTwo}; updateDoc(docRef, payload);

  })
}

function I(){
  board.map((board) => {
    const host = 'game'+board.host
    const docRef=doc(db,host,board.id); const payload = buddy=== ''? { eight:playerOne }:{eight:playerTwo}; updateDoc(docRef, payload);

  })
}

//not happy with the amount of functions but will be updated to be much shorter and cleaner

// setPoints((prev) => [...prev,20]); setP2Points((prev) => [...prev,'B']);


return (

  <div className='entireboard'>
 
 
 {board.map((board,i) =>  {  
    if(board.joined === false) {
      return null
    } else {
      return <div key={i}> <Box> 
   
      {/* <h2>  {buddy} </h2>
      
      <h2> {host} </h2> */}
      
     
    
      <div>  <Functions/> </div>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid'> 
      <Grid item xs={12}>
      <div className='btn-div'>
        
      <HR/>
      
    <hr className='rightline'/>
    <hr className='leftline'/>
         <button className='board' disabled={board.Disabled} onClick={() => {A() }}> {board.zero}  </button> 
         <button className='board'  disabled={board.Disabled}  onClick={() => {B() }}> {board.one} </button> 
         <button className='board'  disabled={board.Disabled}  onClick={() => {C() }}> {board.two} </button>   </div>
        
      </Grid>
      <Grid item xs={12}>
    
      <div className='btn-div'> 
      <hr style={{marginTop:'-130px'}} className='hrfield'/>
      <hr style={{marginTop:'120px'}} className='hrfield'/>
      <button className='board' disabled={board.Disabled}  onClick={() => {D() }}> {board.three} </button>
      <button className='board'  disabled={board.Disabled}  onClick={() =>{E() }}> {board.four} </button>
      <button className='board'  disabled={board.Disabled}  onClick={() =>{F() }}> {board.five} </button> </div>
    
      </Grid>
      <Grid item xs={12}>
    
      <div className='btn-div'>
      <button className='board'  disabled={board.Disabled}  onClick={() => {G() }}> {board.six} </button>
      <button className='board'  disabled={board.Disabled}  onClick={() => {H() }}> {board.seven} </button>
      <button className='board' disabled={board.Disabled}  onClick={() => {I() }}> {board.eight} </button> </div>
    
      </Grid>
      </Grid>
       </Box> 
       <div className='startandreset'>
       <button style={{width:'200px',marginBottom:'20px'}} className="btnstart" onClick={handleStart} > Start Game </button>
       <button className="btnstart" onClick={handleReset} > Reset Game </button>
       </div>
     
       
       </div>
    }
   
   })}
 
  </div>
)

}
