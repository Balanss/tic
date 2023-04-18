import React , {useEffect,useState,lazy,Suspense} from 'react'
import {db} from "../Firebase"
import {collection,addDoc,onSnapshot,doc,query} from "firebase/firestore";
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from "use-local-storage";




export default function Game() {

  const Board = lazy (() => import ("./Board"))

 const [ player,setPlayer] = useState([])
 const [gameId,setGameId] = useState(localStorage.getItem('name'))
 const [ id,setId] = useState("")
 const [ player2,setPlayer2] = useState(localStorage.getItem('player2'))

 
const name = gameId

 useEffect(() =>{
   setGameId(localStorage.getItem('name'))
 },[gameId])

 useEffect(() =>{
    setPlayer2(localStorage.getItem('player2'))
  },[])


 

 useEffect(() => {
    const getPlayer = async () => {
        const colRef = (collection(db,'game'+gameId));
        const q = query(colRef);
        onSnapshot(q,(snapshot) => {
            setPlayer(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
        })

    }
    getPlayer()
    
 },[])



 useEffect(() => {
    player.map((player,i) => {
        setId(player.id)
    })
 },[])

 
  
if(gameId !== ""){
 return <div className='board-div'>
 <Suspense fallback={<h3> Creating game world</h3>}> 
 <div className='divforgamecode'> <h3> Copy game code  </h3> <h2 className='sendcode'>game{gameId}  </h2>  </div>
 <Board/>
 </Suspense>
 </div>

} else return (
  <div className='board-div'>  
  <Suspense fallback={<h3> Joining game world</h3>}> 
 <div className='divforgamecode'> <h2 className='sendcode'> {player2} </h2>  </div>
 <Board/>
 </Suspense></div>
)
   
  
}
