import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Index';
import Preloader from './components/Preloader';

function App() {
  const [show, setShow] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000);
  }, [])
  return (
    <div>
      {show ? <Preloader /> : <Home />}
    </div>
  );
}

export default App;
