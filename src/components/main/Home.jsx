import React from 'react'
import logo from "../../assets/Logo.png"
function Home() {
  return (
    <div className='home' id="home">
      <img src={logo}/>
      <div className='btns'>
      <button>Buy</button>
      <button>CHART</button>
      </div>
    </div>
  )
}

export default Home
