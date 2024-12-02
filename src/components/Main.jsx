import React from 'react'
import Home from './main/Home'
import About from './main/About'
import Roadmap from './main/Roadmap'
import Whitepaper from './main/Whitepaper'
import "../style/Main.css"
import JoinUs from './main/JoinUs'
function Main() {
  return (
    <div>
      <Home/>
      <About/>
      <Roadmap/>
      <Whitepaper/>
      <JoinUs/>
    </div>
  )
}

export default Main
