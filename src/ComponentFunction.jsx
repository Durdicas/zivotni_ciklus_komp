import { useEffect, useState } from 'react'

const ComponentFunction = () => {
  const [count, setCount] = useState(0)
  //useEffect(func, [count])

  const [name, setName] = useState("Algebra")
  //useEffect(func, [name])

  const func = () => {
    console.log ("use effect")

    return () => {
        console.log("function useEfect, cleanUp")
    }
  }

  useEffect(func, [])




  return (
    <>
        <div>Component Function</div>
        <div>{count}</div>
        <h3>{name}</h3>
        <input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count => count + 1)}>Change State </button>
    </>
  )
}

export default ComponentFunction