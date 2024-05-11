import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { increment,decrement } from './redux/counter/counter.slide'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsContent from './components/tabs.content'
import Header from './components/Header'

function App() {

  const count = useSelector((state: RootState) => state.counter)
  console.log(">>>check count: ", count);
  const dispatch = useDispatch();
  return (
    <>
      <Header/>
      <TabsContent/>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <h1>Current count = {count.value}</h1>
      <button
      onClick={()=>dispatch(decrement())}
      >
        decrease -1
      </button>
      <button
      onClick={()=>dispatch(increment())}
      >
        Increase +1
      </button> */}
    </>
  )
}

export default App
