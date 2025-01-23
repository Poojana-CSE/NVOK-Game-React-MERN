import React, { useEffect, useState } from 'react';
import './App.css';
import data from './questions.json';
import correct from './sounds/correct.mp3'
import wrong from './sounds/wrong.mp3'
const App = () => {
  const [currentquestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState(null);
  const [timer,setTimer] = useState(10);

  useEffect(()=>{
    
  })

  const handleClick = (option) => {
    setSelectOption(option);
    if(option===data[currentquestion].correctOption){
      setScore((val)=>val+1);
      const audio = new Audio(correct);
      audio.play();
    }
    else{
      const audio = new Audio(wrong);
      audio.play();
    }
  };


  return (
    <div className='quiz-app'>
      <div className='score-section'>
        <h3>Score: {score}/{data.length}</h3>
        <button>Restart</button>
      </div>
      <div className='question-section'>
        <h2></h2>
        <p>{data[currentquestion].question}</p>
        <div className='options'>
          {data[currentquestion].options.map((option, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(option)}
                style={{ backgroundColor:selectOption === option ? option === data[currentquestion].correctOption ? 'green' : 'red': '',
                }}>
                {option}
              </button>
            );
          })}
        </div>
        <div className='timer'>Time Left: <span>10s</span></div>
      </div>
    </div>
  );
};

export default App;
