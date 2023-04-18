import React , {useEffect,useState} from 'react'
import {db} from "../Firebase"
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";


export default function Friend(){
    const [ player,setPlayer] = useState([])
    const [player2,setPlayer2]=useState('')
    const [ joinId,setJoinId]=useState('')
    const [ loading,setLoading]= useState ('')
    const [error,setError]=useState('')
   


    const navigate = useNavigate()

    useEffect(() => {
        const getPlayer = async () => {
            const colRef = (collection(db,joinId));
            const q = query(colRef);
            onSnapshot(q,(snapshot) => {
                setPlayer(snapshot.docs.map((doc) => ({...doc.data(),id :doc.id})))
            })
    
        }
        getPlayer()
     },[joinId])

     
     
useEffect(() => {
    localStorage.setItem('player2', player2)
},[player2])

useEffect(() => {
    localStorage.setItem('lobby', joinId)
},[joinId])

     function handleRoom(e){
        e.preventDefault()
  if(joinId === ''){
    setError('Invalid room id')
    setTimeout(() =>{setError("")},3000)
  } else {
    player.map((player,i) => {
        if (joinId === player.code){
            setLoading('Loading please wait')
             const docRef=doc(db,joinId,player.id);
             const payload = { joined : true}
             updateDoc(docRef, payload);
             setPlayer2(player.name+'friend');
            setTimeout(() => {
                navigate("/game")

               },3000)
        } else if (player.id !== joinId){
            setError('Invalid room id')
            setTimeout(() =>{setError("")},3000)
        } 
    })
  }
        
     }
    
        return (
            <>
           
            <form onSubmit={handleRoom}>
            
            <input type="text"  onMouseLeave={(e)=> setJoinId(e.target.value)}/>
              <button style={{marginTop:'20px'}} className='btnstart'> Join Room  </button>
            </form>
            <div style={{height:'30px',marginBottom: '20px'}}><p> {error} {loading}  </p> </div>
              
            
            </>
        )
    
   


}




