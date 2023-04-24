import React , {useEffect,useState,lazy,Suspense} from 'react'
import {db} from "../Firebase"
import {collection,addDoc,onSnapshot,doc,query} from "firebase/firestore";
import { Link ,  useNavigate }from "react-router-dom"
import useLocalStorage from "use-local-storage";
import FriendBoard from './FriendBoard';





export default function Game() {

  const Board = lazy (() => import ("./Board"))

 const [gameId,setGameId] = useState('zero')
 const[friend,setFriend] = useState([])
 const [forHost,setForHost] = useState([])
 const [joined,setJoined] = useState([])


useEffect(() =>{
  setGameId(localStorage.getItem('name'))
},[gameId])

useEffect(() =>{
  setFriend(localStorage.getItem('lobby'))
},[friend])




useEffect(() => {
  const docRef = doc(db, 'game'+gameId,'game'+gameId );
  const unSub = onSnapshot(docRef,(docSnap) => {
    if(docSnap.exists()) {
      const joined = docSnap.data().join || [];
      setForHost(joined);
    };
    })
  return unSub
},[gameId])



const buddy = friend.slice(4)
const host = forHost.friend

if(forHost.joined === false && (gameId !== '')){
 return <div className='board-div'>
 <Suspense fallback={<h3> Creating game world</h3>}> 
 <div className='divforgamecode'> <h2 className='sendcode'> awaiting friend   </h2> 
 <p> Copy and send code to friend : game{gameId} </p>
  </div>
 </Suspense>
 </div>

}  if (forHost.joined === true ){
  return <div className='board-div'>
  <Suspense fallback={<h3> Creating game world</h3>}> 
  <div className='divforgamecode'> <h2 className='sendcode'> you vs {host.slice(4)}friend </h2>  </div>
  <div className='divforgamecode'> <h2 className='sendcode'> you are X </h2>  </div>
  <Board/>
  </Suspense>
  </div>
} 

else if (gameId === ''  ) {
 return <div className='board-div'>
 <Suspense fallback={<h3> joining game world</h3>}> 
 <div className='divforgamecode'> <h2 className='sendcode'> you vs {buddy} </h2>  </div>
 <div className='divforgamecode'> <h2 className='sendcode'> you are O </h2>  </div>
 <FriendBoard/>
 </Suspense>
 </div>
}
   
  
}
