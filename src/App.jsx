import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Questions from './components/Questions'
import RightBar from './components/RightBar'

function App() {

  return (
   <main className='flex  min-h-screen min-w-fit bg-black'>
    <SideBar/>
      <Header />
    </main>  
  


  )
}

export default App
