import './App.css';
import Frame1Img from "./Frame 1Image.svg"
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import Frame4 from './components/Frame4';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <img src={Frame1Img} alt="Frame1Image" className='image' />
     <Routes>
     <Route path="/" element={<Frame1 />} />
     <Route path="/Frame2" element={<Frame2 />} />
     <Route path="/Frame3" element={<Frame3 />} />
     <Route path="/Frame4" element={<Frame4 />} />
     </Routes> 
    </>
  );
}

export default App;
