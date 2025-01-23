import React, { useState } from 'react'
import './App.css'
import data from './questions.json';
const App = () => {
  const [currentquestion,setcurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);


  return (
    <div>
      <div className='question-section'>
        <h2>This is a sample question?</h2>
        <div className='options'>
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
          <button>Option 4</button>
        </div>
        <div className='timer'>Time Left: <span>10s</span></div>
      </div>
    </div>
  )
}

export default App
