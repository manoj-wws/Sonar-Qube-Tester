import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 🚨 Security Issue: Using eval() (High-Risk Code)
  const executeCode = () => {
    const userInput = "alert('Hacked!')"; // Simulating user input
    eval(userInput); // 🚨 Dangerous: eval() executes arbitrary code!
  };
  const unUsedVar="Sdfgdfg"   

  const API_KEY = "12345-SECRET-KEY"; // 🚨 Hardcoded secret (should be in env variables)
console.log("Using API Key:", API_KEY);

function testFunction() {
  return; 
  console.log("This will never be executed!"); // 🚨 Unreachable code
}
testFunction();


 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={executeCode}>Run Dangerous Code</button> {/* 🚨 Unsafe Button */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
