import React,{useEffect,useState,lazy} from 'react'
import {collection,addDoc,onSnapshot,doc,updateDoc,getDocs} from "firebase/firestore";
import {db} from "../Firebase"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import P2Functions from './P2Functions';
import HRP2 from './HRP2';
import { Link ,  useNavigate }from "react-router-dom"

export default function FriendBoard() {

    const [gameId,setGameId] = useState(localStorage.getItem('lobby'))
    const [playerTwo,setPlayerTwo] = useState("O")
    const [zz,setZz] = useState([])
    const [ a ,setA]= useState(-1)
    const [board,setBoard] = useState([]);
    const [board2,setBoard2] = useState([]);
    const [board3,setBoard3] = useState([]);
    const [board4,setBoard4] = useState([]);
    const [board5,setBoard5] = useState([]);
    const [board6,setBoard6] = useState([]);
    const [board7,setBoard7] = useState([]);
    const [board8,setBoard8] = useState([]);
    const [board9,setBoard9] = useState([]);
    const [ turn,setTurn] = useState([])
    const navigate = useNavigate()
const [ returns,setReturns] = useState();
    const [ randomNumber,setRandomNumber] = useState(Math.floor(Math.random()*2 +1 ))


   

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
            const startzz = docSnap.data().Disabled || [];
            const tt = docSnap.data().join|| [];
            setBoard(startGame);
            setBoard2(startGame2);
            setBoard3(startGame3);
            setBoard4(startGame4);
            setBoard5(startGame5);
            setBoard6(startGame6);
            setBoard7(startGame7);
            setBoard8(startGame8);
            setBoard9(startGame9);
            setZz(startzz);
            setTurn(tt)
              setReturns(false);
          }else {
            setReturns(true);
          }
          })
        return unSub
      },[gameId])


      function handleStart() {
  
        updateDoc(docRefAll, { setOne:{ one:"",id:1,}}),
        updateDoc(docRefAll, { setTwo:{ two:"",id:2, }}),
        updateDoc(docRefAll, { setThree:{ three:"",id:3, } }),
        updateDoc(docRefAll, { setFour:{ four:"",id:4, } }),
        updateDoc(docRefAll, { setFive:{ five:"",id:5, } }),
        updateDoc(docRefAll, { setSix:{ six:"",id:6, } }),
        updateDoc(docRefAll, { setSeven:{ seven:"",id:7, } }),
        updateDoc(docRefAll, { setEight:{ eight:"",id:8, } }),
        updateDoc(docRefAll, { setNine:{ nine:"",id:9, } }),
        updateDoc(docRefAll, { Disabled:{ Disabled:false,}}),
        updateDoc(docRefAll, { join:{ playerTurn:randomNumber,friend:gameId,host:gameId.slice(4),joined:true,lobby:gameId,}}),
        
        setA(0)
      };
      
      
   
      
      
        
      const docRefAll = doc(db,'gamebalans','gamebalans'); 
     
      function handleSubmit(e) {
        e.preventDefault();
        if (board.id === a && board.one === '' && turn.playerTurn !== 1){
        updateDoc(docRefAll, { setOne:{ one:playerTwo,id:1}});
        updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
          if (board2.id === a && board2.two === '' && turn.playerTurn !== 1){
        updateDoc(docRefAll, { setTwo:{ two:playerTwo,id:2} })
        updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
         if (board3.id === a && board3.three === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setThree:{ three:playerTwo,id:3 } })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board4.id === a && board4.four === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setFour:{ four:playerTwo,id:4} })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board5.id === a && board5.five === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setFive:{ five:playerTwo,id:5} })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board6.id === a && board6.six === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setSix:{ six:playerTwo,id:6 } })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board7.id === a && board7.seven === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setSeven:{ seven:playerTwo,id:7 } })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board8.id === a && board8.eight === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setEight:{ eight:playerTwo,id:8 } })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        }
        if (board9.id === a && board9.nine === '' && turn.playerTurn !== 1){
          updateDoc(docRefAll, { setNine:{ nine:playerTwo,id:9} })
          updateDoc(docRefAll, { join:{ playerTurn:1,friend:'game'+gameId,host:gameId,joined:true,lobby:'game'+gameId}})
         setA(0)
        } 
        
      }
 

  return (
   <>
   
   {returns === true && (

   <div>
<h2> No lobby found.Returning to main menu </h2>
      {setTimeout(() => {
                navigate("/")
               },3000)}
    </div>

   )}


   {returns === false && (<>
   
   <div className='entireboard' style={zz.Disabled === true? {display:'none'}:{display:'block'}}>
    <form onSubmit={handleSubmit}>  
         <div> <Box>     
          <div><P2Functions/> </div>
          <h2> {turn.playerTurn !== 1? 'Your turn' :'Friend turn'} </h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='grid'> 
          <Grid item xs={12}>
          <div className='btn-div'>
            
          <HRP2/>
          
        <hr className='rightline'/>
        <hr className='leftline'/>
             <button className='board' disabled={zz.Disabled}  onClick={() => {setA(board.id) } } > {board.one} </button> 
             <button className='board'  disabled={zz.Disabled} onClick={() => {setA(board2.id) } } > {board2.two}  </button> 
             <button className='board'   disabled={zz.Disabled} onClick={() => {setA(board3.id) } } > {board3.three} </button>   </div>
            
          </Grid>
          <Grid item xs={12}>
        
          <div className='btn-div'> 
          <hr style={{marginTop:'-130px'}} className='hrfield'/>
          <hr style={{marginTop:'120px'}} className='hrfield'/>
          <button className='board' disabled={zz.Disabled}  onClick={() => {setA(board4.id) } } > {board4.four} </button>
          <button className='board' disabled={zz.Disabled} onClick={() => {setA(board5.id) } } > {board5.five} </button>
          <button className='board' disabled={zz.Disabled}  onClick={() => {setA(board6.id) } } > {board6.six} </button> </div>
        
          </Grid>
          <Grid item xs={12}>
        
          <div className='btn-div'>
          <button className='board'  disabled={zz.Disabled}  onClick={() => {setA(board7.id) } } > {board7.seven} </button>
          <button className='board'  disabled={zz.Disabled}   onClick={() => {setA(board8.id) } } > {board8.eight} </button>
          <button className='board' disabled={zz.Disabled} onClick={() => {setA(board9.id) } } > {board9.nine}  </button> </div>
        
          </Grid>
          </Grid>
           </Box> 
           
         
           
           </div>
        
       
      </form>
    
      </div>
      <div className='startandreset'>
     <button style={{width:'120px',marginBottom:'10px',marginTop:'10px'}} className="btnstart" onClick={handleStart} > Start Game </button>
     </div>
   
   </>)}
   
   
   </>
    

  )
}
