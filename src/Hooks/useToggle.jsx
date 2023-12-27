import { useState } from "react"

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
//the const variable state and function setState and the actual initialValue can be changed. they're flexible to allow for reuse
  const toggle = () => {
    setState(!state);
  }
//when you return as an array the const defined above are flexible but
//when you return an object {} you'll have to destructure and rename the consts

  return [state, toggle]
}

export default useToggle