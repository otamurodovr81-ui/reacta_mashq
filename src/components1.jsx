import { useState } from "react"

const Com = () => {
    let [count, setCount] = useState(0)
    function addCount() {
        setCount(++count)
    }
    return <>
        <div>
            <button onClick={addCount}>+1</button>

            <p>{count}</p>
     </div>
    </>
}
export default Com