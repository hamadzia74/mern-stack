import React from 'react'
import { useState, useEffect, useRef } from "react"

const UseRefs = () => {

    const [name, setName] = useState('')
    const prevName = useRef('')

    // const renderCount = useRef(1)

    useEffect(() => {
        prevName.current = name
    }, [name])

    // useEffect(() => {
    //   renderCount.current => renderCount.current + 1
    // })

  return (
    <>
    <h1>useRefs</h1>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} and it used to be {prevName.current}</div>
    
    {/* <div>I render {renderCount.current} times</div> */}
    </>
  )
}

export default UseRefs