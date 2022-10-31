import React from 'react'
import './App.css';
import GetQuestion from './Components/GetQuestion';
import {useState} from 'react';

function App() {
  // const [question, setQuestion] = useState(null)
  // const getQuestion = async() => {
  //   try{
  //     const res = await fetch(`http://jservice.io/api/random`);
  //     const data = await res.json()  
  //     console.log(data);
  //   }catch(error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div className="App">
     <h1>Jeopardy!</h1>
     {/* <button onClick={getQuestion}>Get Question</button>  */}
     <GetQuestion/>
    </div>
  );
}






export default App;
