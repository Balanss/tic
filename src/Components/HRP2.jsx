import React,{useEffect,useState} from 'react'
import {collection,addDoc,onSnapshot,doc,query,updateDoc} from "firebase/firestore";
import {db} from "../Firebase"

export default function HRP2() {
    const [gameId,setGameId] = useState(localStorage.getItem('lobby'))

    const [ board,setBoard]= useState([])
    const [board2,setBoard2] = useState([]);
    const [board3,setBoard3] = useState([]);
    const [board4,setBoard4] = useState([]);
    const [board5,setBoard5] = useState([]);
    const [board6,setBoard6] = useState([]);
    const [board7,setBoard7] = useState([]);
    const [board8,setBoard8] = useState([]);
    const [board9,setBoard9] = useState([]);

    
    useEffect(() => {
      const docRef = doc(db, gameId,gameId);
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
    
          setBoard(startGame);
          setBoard2(startGame2);
          setBoard3(startGame3);
          setBoard4(startGame4);
          setBoard5(startGame5);
          setBoard6(startGame6);
          setBoard7(startGame7);
          setBoard8(startGame8);
          setBoard9(startGame9);
        };
        })
      return unSub  
   },[])


   const winCon1 = board.one + board2.two + board3.three;
   const winCon2 = board4.four + board5.five + board6.six;
   const winCon3 = board7.seven + board8.eight + board9.nine;
   const winCon4 = board.one + board5.five + board9.nine;
   const winCon5 = board3.three+board5.five+board7.seven;
   const winCon6 = board.one+board4.four+board7.seven;
   const winCon7 = board2.two+board5.five+board8.eight;
   const winCon8 = board3.three+board6.six+board9.nine;

   


 if(winCon1 === 'XXX' ||  winCon1 === 'OOO' ){
  return ( <div className='wincon1'> <hr className='winhr'/> </div> )
} 
  if(winCon2 === "XXX"|| winCon2 === 'OOO'){
  return (<div className='wincon2'> <hr className='winhr'/> </div>)
}
else if(winCon3 === 'XXX'|| winCon3 === 'OOO'){
  return ( <div className='wincon3'><hr className='winhr'/> </div>)
}
else if(winCon4 === 'XXX'|| winCon4 === 'OOO'){
  return (<div className='wincon4'><hr className='hr-dia'/> </div>)
} 
else if(winCon5 === 'XXX'|| winCon5 === 'OOO'){
     return (<div className='wincon5'><hr className='hr-dia'/> </div>)
}
else if(winCon6 === 'XXX'|| winCon6 === 'OOO'){
  return (<div className='wincon6'> <hr className='winhr'/> </div>)
} 
 else if(winCon7 === 'XXX'|| winCon7 === 'OOO'){
  return (<div className='wincon7'> <hr className='winhr'/> </div> )
}
 else if(winCon8 === 'XXX'|| winCon8 === 'OOO'){
  return ( <div className='wincon8'><hr className='winhr'/> </div>)
}

}
