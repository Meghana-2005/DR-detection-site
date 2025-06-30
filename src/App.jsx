import React from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/Home/Home'
import Ds from './components/DRstages/Ds'
import Pd from './components/PredictDR/pd'
import C from './components/Caretips/c'
import A from './components/AboutUs/a'




const App = () => {
  return (
    
      <div className="bg-orange-600">
      
        <div> <Navbar /></div>
      
      
        <div id="h" className="scroll-mt-16 md:scroll-mt-24"><Home /></div>
        <div id="d" className="scroll-mt-16 md:scroll-mt-24"><Ds /></div>
        <div id="p" className="scroll-mt-14 md:scroll-mt-24"><Pd /></div>
        <div id="c" className="scroll-mt-14 md:scroll-mt-24"><C /></div>
        <div id="a" className="scroll-mt-14 md:scroll-mt-24"><A /></div>
      
      </div>
   
  )
}

export default App
