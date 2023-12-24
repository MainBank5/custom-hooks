
import useToggle from './useToggle';
import useCount from './useCount';
import './App.css'
import Api from './components/Api';

function App() {
  //for simplicity sake avoid renaming the hooks imported values and functions when using them in your components
  //especilly if you have more than one function
  const [text, change] = useToggle()
  const [count, increment, decrement, reset] = useCount()

  return (
    <>
      <div className="app">
        {/*<button onClick={()=>{setText((prev) => !prev)}}>
          {text?"Hide":"Show"}
        </button>*/}
        <button onClick={change}>{text?"Hide":"Show"}</button>
        { text && <h1>Heading shown</h1>}

        <p>{count}</p>
        <button onClick={increment}>increase value</button><br />
        <button onClick={decrement}>decrease value</button><br />
        <button onClick={reset}>Reset value</button><br />

        <Api/>
        
      </div>
    </>
  );
}

export default App
