import React, { useState ,useRef} from 'react'
import {data} from './data.jsx'
const App = () => {
  const[index,setIndex]=useState(0);
  const[question,setQuestion]=useState(data[index]);
  const[lock,setLock]=useState(false);
  const[score,setScore]=useState(0);
  const[result,setResult]=useState(false);
  let Option1=useRef(null);
  let Option2=useRef(null);
  let Option3=useRef(null);
  let Option4=useRef(null);

  let option_array=[Option1,Option2,Option3,Option4]
  const checkAns=(e,ans)=>{
    if(lock==false)
    {
      if(question.ans==ans)
      { 
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1)
      }
      else{
        e.target.classList.add("wrong");
        setLock(true)
        option_array[question.ans-1].current.classList.add("correct");
      }
  }
  }

  const next=(e)=>{
    if(lock==true)
    {  
      
      if(index==data.length-1)
      {
        setResult(true);
        return 0;
      }
      
      
      
      setIndex((prevIndex) => {
      const newIndex = prevIndex + 1; // Pre-increment
      setQuestion(data[newIndex]);
      return newIndex; // Update the state
    });
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }
  return (
    <div>
      <h1>Quiz App</h1>
      {result?<></>:<>
        <p>{index+1}. {question.question}</p>
      <ul>
        <li  ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li  ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li  ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li  ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div>{index+1} of {data.length} questions</div>
      </>}
      {result?<>
        <h2>You Scored {score} out of {data.length}</h2>
      
      </>:<></>}
        
   
    </div>
  )
}

export default App