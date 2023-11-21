import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() { //useState(0) means count will start at 0
  let [count, setCount] = useState(0);//GOTTA USE THIS TO MANIPuLATE VARIABLES THAT CHANGE HOW THE APP RENDERS

  //THIS IF IS AN EXAMPLE OF CONDITIONAL RENDERING
  if (count > 2) {
    return <p> "it&apos;s greater than 2"</p>; //USING THAT CODE FOR APOSTROPHE!
  } else{
    return (
      <>
        <div>
          <HelloWorld title = "Yo"/>
          <HelloWorld title = "Hi"/>

          <HelloWorld title = "Allo"/>

          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => count = count + 1}>
            {/* setCount means it will update count and then reset the function to attempt to render it again */}
            count is {count}
          </button>
          <button onClick={()=> setCount(count)}> REFRESH </button>
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
}

export default App
