
import { useState } from 'react'
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
  const [calVal,setCalVal] = useState([]);

  const handleNew = (buttonText)=>{
    if (buttonText === 'C'){
      setCalVal("");

    }
    else if (buttonText === '='){
      let result=eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

  }
  return (
    <div className='container'>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={handleNew}></ButtonContainer>
    </div>
  )
}

export default App
