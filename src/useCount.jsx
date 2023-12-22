import {useState} from "react"

const useCount = (initialValue = 0, add = 2) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + add)
    }
    const decrement = () => {
        setCount(count - add)
    }
    const reset = () => {
        setCount(initialValue)
    }

    return[count, increment, decrement, reset]
}

export default useCount