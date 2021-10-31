import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <p>(lowest count = 0)</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
      <button onClick={() => dispatch(incrementByAmount(-5))}>Decrease by 5</button>
    </div>
  );
}

export default App;
