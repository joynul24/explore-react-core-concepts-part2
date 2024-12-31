import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
 
    const hangleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={hangleAdd}>Add</button>
            <button onClick={handleReduce}>Refduce</button>
        </div>
    )
}