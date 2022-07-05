import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark Mode is enabled","success");
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Dark Mode is disabled","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={<About mode={mode}/>}>          
        </Route>
        <Route exact path='/' element={<Textform heading="Enter text below" mode={mode} showAlert={showAlert}/>}>        
        </Route>
      </Routes>        
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
