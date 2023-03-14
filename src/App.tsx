import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Card } from './LazyAndSuspense'




function App() {
  return (
    <div className="App">
       <Card 
        header={"item1"}
        body={"this is the first item"}
        footer={
          <div>
            <button type='button'>Ok</button>
          </div>
        }
        />
    </div>
  )
}

export default App
