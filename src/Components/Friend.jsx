import React , {useEffect,useState,useRef,useMemo} from 'react'
import {db} from "../Firebase"
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import {collection,addDoc,onSnapshot,doc,updateDoc,getDocs} from "firebase/firestore";


export default function Friend(){
    const [ player,setPlayer] = useState([])
    const [player2,setPlayer2]=useState(localStorage.getItem('joinId'))
    const [ joinId,setJoinId]=useState("")
    const [ loading,setLoading]= useState ('Join Room')
    const [error,setError]=useState('')
   


 
    
    useEffect(() => {
        localStorage.setItem('lobby', joinId)
    },[joinId])
    

  
let hope =joinId === ''? 'a':joinId
 
    const navigate = useNavigate()
    useEffect(() => {
      hope = joinId === ''? 'a':joinId
    
        const docRef = doc(db,hope,hope);
        const unSub = onSnapshot(docRef,(docSnap) => {
          if(docSnap.exists()) {
            const startGame = docSnap.data().join || [];
            setPlayer2(startGame);
          };
          })
        return unSub
      
      },[joinId])
     
      


const docRefAll = doc(db, hope, hope); 

     function handleRoom(e){
        e.preventDefault()
        joinId === ''? (setError('Invalid room id'))  (setTimeout(() =>{setError("")},3000))  : null;
        player2 === null ?  (setError('Invalid room id'))  (setTimeout(() =>{setError("")},3000)) : null;


 if (joinId === 'game'+player2.host){
            updateDoc(docRefAll, { join:{ lobby:joinId,friend:joinId,joined:true,host:player2.host,}})
            setLoading('Loading please wait')             
            setTimeout(() => {
                navigate("/game")
               },3000)
        }        
       }
   


        return (
            <>
           
            <form onSubmit={handleRoom}>
            
            <input type="text"  onChange={(e)=> setJoinId(e.target.value)}/>
              <button style={{marginTop:'20px'}} className='btnstart'> {loading}  </button>
              <p> {error} </p>
              
            </form>
            
              
            
            </>
        )
    
   


}




