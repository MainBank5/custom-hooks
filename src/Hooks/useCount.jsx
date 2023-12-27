import {useState} from "react"

const useCount = (initialValue = 0, step = 2) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + step)
    }
    const decrement = () => {
        setCount(count - step)
    }
    const reset = () => {
        setCount(initialValue)
    }

    return[count, increment, decrement, reset]
}

export default useCount