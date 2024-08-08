import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const obj = {
    name: "Anas raza"
  }

  const arr = [1, 3, 5, 7];

  // const btnText = 'Explore'
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind test</h1>
      <div className='flex gap-2'>
        <Card productName="Macbook" myObj={obj} myArr={arr} btnText="Read" />
        <Card productName="Iphone" myObj={obj} myArr={arr} btnText="Explore" />
        <Card productName="Headphones" myObj={obj} myArr={arr} />
      </div>
    </>
  )
}

export default App
