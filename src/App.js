import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Index';
import Domestic from './pages/Domestic-services';
import Commercial from './pages/Domestic-services/commercial-services';
import { Routes, Route } from 'react-router-dom';
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
      {show ? <Preloader /> :
        (
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/domestic' element={<Domestic />} />
            <Route path='/commercial' element={<Commercial />} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
