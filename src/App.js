import React, { useEffect, useState } from 'react';
import './App.css';
import data from './questions.json';
import correct from './sounds/correct.mp3'
import wrong from './sounds/wrong.mp3'
const App = () => {
  const [currentquestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState(null);
  const [showScore,setShowScore] = useState(false);
  const [timer,setTimer] = useState(10);

  useEffect(()=>{
    let interval;
    if(timer>0 && !showScore){
      interval = setInterval(()=>{
        setTimer((prevTime)=>prevTime-1);
      },1000);
    }
    else if(timer===0){
        if(currentquestion < data.length - 1){
          setcurrentQuestion((preQues)=>preQues+1);
          setTimer(10);
          setSelectOption(null);
        }
        else{
          setShowScore(true);
        }
      
    }
    
    return ()=>clearInterval(interval);
  },[timer,showScore,currentquestion]);



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

  function restartQuiz(){
    setcurrentQuestion(0);
    setTimer(10);
    setShowScore(false);
    setScore(0);
    setSelectOption(null);
  }
  return (
    <div className='quiz-app'>
      {showScore ? (      
        <div className='score-section'>
        <h3>Score: {score}/{data.length}</h3>
        <button onClick={restartQuiz}>Restart</button>
      </div>
    ):(
    <div className='question-section'>
        <h2></h2>
        <p>{data[currentquestion].question}</p>
        <div className='options'>
          {data[currentquestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleClick(option)}
                style={{ backgroundColor:selectOption === option ? option === data[currentquestion].correctOption ? 'green' : 'red': '',
                }}>
                {option}
              </button>
            )
          )}
        </div>
        <div className='timer'>Time Left: <span>{timer}</span></div>
      </div>
    )}
    </div>
  );
};

export default App;
