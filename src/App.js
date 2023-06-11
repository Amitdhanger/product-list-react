import Header from "./Components/Header";
import Phones from "./Pages/Phones";
import Mac from "./Pages/Mac";
import Ipod from "./Pages/Ipod";
import { Routes,Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>
      <Route path="/" element={<Phones/>}/>
      <Route path="/mac" element={<Mac/>}/>
      <Route path="/ipod" element={<Ipod/>}/>
     </Routes>
    </div>
  );
}

export default App;
