import { useState } from 'react'
import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'

function App() {


  return (

    <>
      <div>
        <h1>Vite React</h1>
        <ChaiCard 
        name = "Headphones"
        price={555}
        />

        <div>
          <Counter />
        </div>
      </div>
    </>
  )
}

export default App
