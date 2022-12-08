import React,{ useState,useEffect } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("mounting")
        console.log("count1 .."+count)
        console.log("count2 .."+count2)

    },[count,count2])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <h2>Counter......{count}</h2>
        <button onClick={()=>setCount2(count2+1)}>increment</button>
        <h2>Counter 2......{count2}</h2>
    </div>
   
  )
}

export default Counter