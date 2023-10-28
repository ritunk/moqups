
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import Searched from './components/Searched';
import Matched from './components/Matched';
import Header from './components/Header';
import Closed from './components/Closed'
import Rejected from './components/Rejected';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header/>
     <Routes>
         <Route path='/' element={<Projects/>}></Route>
        <Route path='/matched' element={<Matched/>}></Route>
        <Route path='/searched' element={<Searched/>}></Route>
        <Route paht='/closed' element={<Closed/>}></Route>
        <Route paht='/rejected' element={<Rejected/>}></Route>

     </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
