// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import Router from './Router/Router'
import './App.css';

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCripto())
  // }, [])

  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;
