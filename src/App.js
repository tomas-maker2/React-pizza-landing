import './App.css';
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './page/Inicio';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
