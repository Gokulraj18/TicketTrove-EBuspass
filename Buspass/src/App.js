import Home from './component/Home';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Form from './component/Form';
import Card from './component/Card';
import Renewal from './component/Renewal';


function App() {
  return (
    <div>
      
      <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path="/form" element={<Form/>}/>
          <Route path='/card' element={<Card/>} />
          <Route path='/renewal' element={<Renewal />} />
      </Routes>
    </div>
  );
}

export default App;