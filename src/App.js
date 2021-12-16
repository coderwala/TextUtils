
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
 const [mode,setMode] = useState('light')
 const [alert, setAlert] = useState(null)
 const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 }
 const toggleMode = () =>{
 if(mode ==='light'){
   setMode('dark');
   document.body.style.backgroundColor="#042743";
   showAlert("Dark mode has enabled","success")
   document.title='TextUtils-Dark mode'
 }
 else{
   setMode('light');
   document.body.style.backgroundColor="white";
   showAlert("Light mode has enabled","success")
   document.title='TextUtils-Light mode'
  
 }
 }
 
  return (
    
    <>
      {/* <Navbar title="TextUtils" About="Abouttextutils" /> */}
      <Router> 
      
      <Navbar title="TextUtils" mode={mode} About="Abouttextutils" toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       
      <Routes>
          <Route path="/about" element={<About/>} />
            
         
          <Route path="/" element={<Textform  heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> } />
            
          
      </Routes>
     
      
      </div>
      </Router>
       

    </>

   );
  }

export default App;
