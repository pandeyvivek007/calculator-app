import './App.css';
import Button from './components/ButtonComponents';
import Input from './components/Input';
import {useState} from 'react'
import {evaluate} from 'mathjs'


function App() {
  const [text,setText]=useState("")
  const [result,setResult]=useState("")

  
  const solve=(expresstion)=>{
      return evaluate(expresstion)
  }

  const addToResult=()=>{
    setResult(`${solve(text)}`)
  }


  const addToText=(val)=>{
    setText(`${text}${val}`)
  }

  const clear=()=>{
    setText("")
    setResult("")
  }
  
  return (
    <div className="App">
      <div className="main-container">
        <div>
          <Input text={text} result={result}/>
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color="#dba307" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4"handleClick={addToText}/>
          <Button symbol="5"handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color="#dba307" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color="#dba307" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="=" handleClick={addToResult}/>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="AC"/>
          <Button symbol="-" color="#dba307" handleClick={addToText}/>
        </div>
        <div>
          <Button symbol="Clear" color="#f27979" handleClick={clear}/>
        </div>
      </div>
    </div>
  );
}

export default App;
