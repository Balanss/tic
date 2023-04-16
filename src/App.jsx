import { useState,lazy,Suspense } from 'react'
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom'
import "./App.css"

import Game from './Components/Game'
function App() {

const Create = lazy(() => import ("./Components/Create"))


  return (
    <div className="App">
<Router> <Suspense fallback={<h2> Loading ... </h2>}>  
  <Routes>
   <Route path="/tic" element={<Create/>}></Route>
   <Route path="/tic/game" element={<Game/>}></Route>
  </Routes>
   </Suspense>
</Router>
    </div>
  )
}

export default App
