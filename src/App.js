import './App.css';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import FetchPost from './components/FetchPost';

const App = () => {
  const state = useSelector((state) => state);

  return (
    <div className='App'>
      <h2>Count: {state.counter.count}</h2>
      <Counter />
      <FetchPost />
    </div>
  );
};

export default App;
