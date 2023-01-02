import './App.css';
import Navbar from './projectTwo/Navbar'
import InputSection from './projectTwo/InputSection'
import OutputSection from './projectTwo/OutputSection';
import Footer from './projectTwo/Footer';

import { useState } from 'react';

function App() {

  // ============= My Project ======================


  const [data, setData] = useState([])

  console.log("yeh print kro",data, data.length)
  function AddDetails(details){

    setData([
      ...data, details
    ])
  }
      return (
    <div className="App">

   
    <Navbar/>
    <InputSection  AddDetails={AddDetails} />
    <OutputSection  data={data} />
    <Footer/>

    
    </div>
  );
}

export default App;
