import React ,{useState,useEffect}from 'react'
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import {db} from "../Firebase"
import useLocalStorage from 'use-local-storage';
import P2Functions from './P2Functions';

export default function Functions() {


  const [gameId,setGameId] = useState('')
  const [count,setCount] = useState('')


 const [ board,setBoard]= useState([])
 const [board2,setBoard2] = useState([]);
 const [board3,setBoard3] = useState([]);
 const [board4,setBoard4] = useState([]);
 const [board5,setBoard5] = useState([]);
 const [board6,setBoard6] = useState([]);
 const [board7,setBoard7] = useState([]);
 const [board8,setBoard8] = useState([]);
 const [board9,setBoard9] = useState([]);
 const [zz,setZZ] = useState([])
 


 useEffect(() => {
  const docRef = doc(db, 'game'+gameId,'game'+gameId);
  const unSub = onSnapshot(docRef,(docSnap) => {
    if(docSnap.exists()) {
      const startGame = docSnap.data().setOne || [];
      const startGame2 = docSnap.data().setTwo || [];
      const startGame3 = docSnap.data().setThree || [];
      const startGame4 = docSnap.data().setFour || [];
      const startGame5 = docSnap.data().setFive || [];
      const startGame6 = docSnap.data().setSix || [];
      const startGame7 = docSnap.data().setSeven || [];
      const startGame8 = docSnap.data().setEight || [];
      const startGame9 = docSnap.data().setNine || [];
      const startDisabled = docSnap.data().Disabled || [];
    

      setBoard(startGame);
      setBoard2(startGame2);
      setBoard3(startGame3);
      setBoard4(startGame4);
      setBoard5(startGame5);
      setBoard6(startGame6);
      setBoard7(startGame7);
      setBoard8(startGame8);
      setBoard9(startGame9);
      setZZ(startDisabled);
    
    };;
    })
  return unSub  
},[gameId])

 
 useEffect(() =>{
  setGameId(localStorage.getItem('name'))
},[gameId])




//refresh kinda breaks it the names on winner

//also pretty ugly  but the goal is to make it cleaner but ATM IS WORKS

const winCon1 = board.one + board2.two + board3.three;
const winCon2 = board4.four + board5.five + board6.six;
const winCon3 = board7.seven + board8.eight + board9.nine;
const winCon4 = board.one + board5.five + board9.nine;
const winCon5 = board3.three+board5.five+board7.seven;
const winCon6 = board.one+board4.four+board7.seven;
const winCon7 = board2.two+board5.five+board8.eight;
const winCon8 = board3.three+board6.six+board9.nine;
const draw = board.one + board2.two + board3.three + board4.four + board5.five + board6.six + board7.seven + board8.eight + board9.nine;

const docRefAll = doc(db, 'game'+gameId, 'game'+gameId); 


if(winCon1 === 'XXX' || winCon1 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return ( <div className='windiv'>  <p className='wintitle'> {winCon1 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p> </div> )
} 
 else if(winCon2 === "XXX" || winCon2 === 'OOO' ){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return (<div className='windiv'>  <p className='wintitle'> {winCon2 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p> </div>)
}
else if(winCon3 === 'XXX' || winCon3 === 'OOO' ){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return ( <div className='windiv'><p className='wintitle'> {winCon3 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p>  </div>)
}
else if(winCon4 === 'XXX' || winCon4 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return (<div className='windiv'> <p className='wintitle'> {winCon4 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p> </div>)
} 
else if(winCon5 === 'XXX' || winCon5 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
     return (<div className='windiv'> <p className='wintitle'> {winCon5 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p> </div>)
}
else if(winCon6 === 'XXX' || winCon6 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return (<div className='windiv'> <p className='wintitle'> {winCon6=== 'OOO'? 'U LOSE' : 'U WIN !!'} </p>  </div>)
} 
 else if(winCon7 === 'XXX' || winCon7 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return (<div className='windiv'> <p className='wintitle'> {winCon7=== 'OOO'? 'U LOSE' : 'U WIN !!'} </p>  </div> )
}
 else if(winCon8 === 'XXX' || winCon8 === 'OOO'){
  updateDoc(docRefAll, { Disabled:{ Disabled:true } })
  return ( <div className='windiv'> <p className='wintitle'> {winCon8 === 'OOO'? 'U LOSE' : 'U WIN !!'} </p> </div>)
} if (draw.length === 9 && board.one !== "") {
  return ( <div className='windiv'> <p className='wintitle'> DRAW </p> </div>)
  }

}




 
 
