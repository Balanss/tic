import { useState,lazy,Suspense } from 'react'
import { Routes, HashRouter,Route } from 'react-router-dom'
import "./App.css"

import Game from './Components/Game'
import Loading from './Components/Loading'
function App() {

const Create = lazy(() => import ("./Components/Create"))


  return (
    <div className="App">
<HashRouter> <Suspense fallback={<h2> Loading ... </h2>}>  
  <Routes>
   <Route path="/" element={<Create/>}></Route>
   <Route path="/game" element={<Game/>}></Route>
   <Route path="/loading" element={<Loading/>}></Route>
  </Routes>
   </Suspense>
</HashRouter>
    </div>
  )
}

export default App
