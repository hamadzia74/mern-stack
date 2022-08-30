import React, {useState, useEffect} from 'react'

const UseEffects = () => {
  
  const [count, setCount] = useState(()=>{
    return 0
  });

  useEffect(() => {
    document.title = `Chats (${count})`
  });

  return (
    <>
    {/* Browser API */}
    <h1>useEffect</h1>
    <p> {count} </p>
    <button onClick={() => setCount(count + 1)}>Click Here</button>
    </>
  )
}

export default UseEffects