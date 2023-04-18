import React,{useEffect,useState} from 'react'
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import {db} from "../Firebase"
export default function HR() {

  const [ lobby,setLobby]= useState('')
  const [gameId,setGameId] = useState(localStorage.getItem('name'))

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
      
   },[gameId,lobby])


 

  return ( 
    <div>
      {board.map((board,i) => {
        return (<div key={i}>
         
        <div className='wincon4'> 
         {board.zero === "X" && board.three === "X" && board.six === "X"? <hr className='winhr'/>:null} 
         {board.zero === "O" && board.three === "O" && board.six === "O"? <hr className='winhr'/> :null} 
             </div>
                                                                                                            
  <div className='wincon1'>
    {board.zero === "X" && board.one === "X" && board.two === "X"?  <hr className='winhr'/> :null}
    {board.zero === "O" && board.one === "O" && board.two === "O"? <hr className='winhr'/>:null} 
     </div>


  <div className='wincon6'> 
  {board.five === "X" && board.two === "X" && board.eight === "X"? <hr  className='winhr'/>:null} 
   {board.five === "O" && board.two === "O" && board.eight === "O"? <hr className='winhr'/>:null} 
   </div>

   <div className='wincon7'>    
    {board.zero === "X" && board.four === "X" && board.eight === "X"? <hr className='hr-dia'/>:null} 
    {board.zero === "O" && board.four === "O" && board.eight === "O"? <hr className='hr-dia'/>:null}  
    </div>

    <div className='wincon8'> 
    {board.four === "X" && board.two === "X" && board.six === "X"? <hr className='hr-dia'/>:null} 
    {board.four === "O" && board.two === "O" && board.six === "O"? <hr className='hr-dia'/>:null} 
      </div>

      <div className='wincon5'>  
     {board.one === "X" && board.four === "X" && board.seven === "X"? <hr className='winhr'/>:null} 
     {board.one === "O" && board.four === "O" && board.seven === "O"? <hr className='winhr'/>:null} 
      </div>
      <div className='wincon2'>
      {board.three === "X" && board.four === "X" && board.five === "X"? <hr className='winhr'/>:null} 
      {board.five === "O" && board.four === "O" && board.three === "O"? <hr className='winhr'/>:null} 
      </div>

      <div className='wincon3'>  
      {board.six === "X" && board.seven === "X" && board.eight === "X"? <hr className='winhr'/>:null} 
      {board.six === "O" && board.seven === "O" && board.eight === "O"? <hr className='winhr'/>:null} 
      </div>

        </div>)

        
      })}
    </div>
  )
}
