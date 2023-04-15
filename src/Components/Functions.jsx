import React ,{useState,useEffect}from 'react'
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import {db} from "../Firebase"
import useLocalStorage from 'use-local-storage';

export default function Functions() {


  const [gameId,setGameId] = useState(localStorage.getItem('name'))
  const [friend,setFriend] = useLocalStorage(localStorage.getItem('player2'))
  const [ lobby,setLobby]= useState('')
  const room= 'game'+gameId;
  const [count,setCount] = useState(0)


  useEffect(() => {
    setLobby(localStorage.getItem('lobby')) 
 },[lobby])
  




 const [ board,setBoard]= useState([])
 useEffect(() => {
  if (gameId === ""){
   const getBoard = async () => {
     const colRef = (collection(db,lobby));
     const q = query(colRef);
     onSnapshot(q,(snapshot) => {
         setBoard(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
     })
     
 }
getBoard()

  } else if (gameId !== ""){
   const getBoard = async () => {
     const colRef = (collection(db,'game'+gameId));
     const q = query(colRef);
     onSnapshot(q,(snapshot) => {
         setBoard(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
     })
    
 }
 getBoard()
  }
   
},[])

 
 useEffect(() =>{
  setGameId(localStorage.getItem('name'))
},[])



//refresh kinda breaks it the names on winner

//also pretty ugly  but the goal is to make it cleaner but ATM IS WORKS

return <div>
{board.map((board,i) => {   
    if(board.zero  && board.three && board.six === "X"){
      const docRef=doc(db,room,board.id);const payload = { Disabled : true,}; updateDoc(docRef, payload);
      return (  <div key={i}> <h2 className='wintitle'>{board.host}  Wins </h2>  </div>)

    } else if (board.zero  && board.three  && board.six === "O"){
      const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
      return (<div  key={i}> <h2 className='wintitle'>{board.friend} Wins </h2>   </div>)

    }  else if (board.zero === "X" && board.one === "X" && board.two === "X" ){
      const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
    return (<div key={i}>  <h2 className='wintitle'> {board.host} Wins </h2>   </div>)

      } else if(board.zero === "O" && board.one === "O" && board.two === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return (<div key={i}> <h2 className='wintitle'> {board.friend} Wins </h2>  </div>)

      } else if(board.five === "X" && board.two === "X" && board.eight === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.host} Wins </h2>  </div>)

      }  else if(board.five === "O" && board.two === "O" && board.eight === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'> {board.friend} Wins </h2>  </div>)

      }  else if(board.zero === "X" && board.four === "X" && board.eight === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.host} Wins </h2>  </div>)

      } else if(board.zero === "O" && board.four === "O" && board.eight === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}>  <h2 className='wintitle'>{board.friend} Wins </h2>   </div>)

      } else  if(board.four === "X" && board.two === "X" && board.six === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'> {board.friend} Wins </h2>{board.host}   </div>)

      } else if(board.four === "O" && board.two === "O" && board.six === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}>  <h2 className='wintitle'>{board.friend} Wins </h2>   </div>)

      } else if(board.one === "X" && board.four === "X" && board.seven === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.host} Wins </h2>   </div>)

      }  else if(board.one === "O" && board.four === "O" && board.seven === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.friend} Wins </h2> </div>)

      }  else if(board.three === "X" && board.four === "X" && board.five === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}>  <h2 className='wintitle'> {board.host} Wins </h2>  </div>)

      } else  if(board.five === "O" && board.four === "O" && board.three === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.friend} Wins </h2>  </div>)

      } else if(board.six === "X" && board.seven === "X" && board.eight === "X"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'> {board.host} Wins </h2>    </div>)

      } else if(board.six === "O" && board.seven === "O" && board.eight === "O"){
        const docRef=doc(db,room,board.id);const payload = { Disabled : true}; updateDoc(docRef, payload);
        return(<div key={i}> <h2 className='wintitle'>{board.friend} Wins </h2>   </div>)
      } 

 })}
</div>
}




 
 
