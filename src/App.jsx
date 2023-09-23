//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import ComponentClass from './ComponentClass'
import ComponentFunction from './ComponentFunction'

function App() {

  const [ isCompVisible, setIsCompVisible ] = useState(true)

  const handleToggleComponent = () => {
    setIsCompVisible(prev => !prev)
  }
  

  return (
    <>
      { isCompVisible ? <ComponentClass /> : <ComponentFunction /> }
      <button onClick={handleToggleComponent}>Toggle Component</button>
    </>
  )
}

export default App
