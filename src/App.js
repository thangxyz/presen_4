
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom";
import Cards from './Components/Cards'
import CardsDetail from './Components/CardsDetail';


function App() {
  return (
    <div >
     <Header/>
     <Routes>
     <Route path='/' element={<Cards/>} />    
  <Route path="/cart/:id" element={<CardsDetail/>}/>

   </Routes>
    </div>
  );
}

export default App;
