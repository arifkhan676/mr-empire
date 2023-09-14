import './App.css';
import CardMenu from './components/CardSection/CardMenu';
import Navbaar from './components/Header/Navbaar';
import MainFiles from './components/MainComponents/MainFiles';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Routes>
        <Route exact path='/' element={<MainFiles />} >  </Route>
        <Route path='/Navbar' element={<Navbaar />} >  </Route>
        <Route path='/CardMenu' element={<CardMenu />} >  </Route>
        <Route path='/Product/:productId' element={<ProductPage />} >  </Route>

      </Routes>
    </div>
  );
}

export default App;
