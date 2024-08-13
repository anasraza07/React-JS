import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>
      <div className='fixed w-full flex justify-center bottom-20'>
        <div className='flex flex-wrap justify-center gap-5 bg-slate-50 rounded-xl px-5 py-2'>
          <button className='text-xl font-medium text-white px-5 py-2 rounded-2xl' style={{ backgroundColor: "red" }}
            onClick={() => setColor('red')}>
            Red</button>
          <button className='text-xl font-medium text-white px-5 py-2 rounded-2xl' style={{ backgroundColor: "blue" }}
            onClick={() => setColor('blue')}>
            Blue</button>
          <button className='text-xl font-medium text-white px-5 py-2 rounded-2xl' style={{ backgroundColor: "green" }}
            onClick={() => setColor('green')}>
            Green</button>
          <button className='text-xl font-medium text-black px-5 py-2 rounded-2xl' style={{ backgroundColor: "yellow" }}
            onClick={() => setColor('yellow')}>
            Yellow</button>
          <button className='text-xl font-medium text-white px-5 py-2 rounded-2xl' style={{ backgroundColor: "olive" }}
            onClick={() => setColor('olive')}>
            Olive</button>
          <button className='text-xl font-medium text-black px-5 py-2 rounded-2xl' style={{ backgroundColor: "lightcoral" }}
            onClick={() => setColor('lightcoral')}>
            Lightcoral</button>
          <button className='text-xl font-medium text-black px-5 py-2 rounded-2xl' style={{ backgroundColor: "lightblue" }}
            onClick={() => setColor('lightblue')}>
            Lightblue</button>
          <button className='text-xl font-medium text-white px-5 py-2 rounded-2xl' style={{ backgroundColor: "purple" }}
            onClick={() => setColor('purple')}>
            Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App;