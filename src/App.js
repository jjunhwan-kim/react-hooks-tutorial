import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import { useState } from 'react';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    /*
    <>
      <Counter />
      <Info />
    </>
    */
    /*
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
    */
    <Average />
  );
}

export default App;
