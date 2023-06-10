// import logo from './logo.svg';
// import './App.css';
import { PrimaryLayout } from './components/Layout';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from 'containers/Home';
function App() {
  return (
    <BrowserRouter >
      <PrimaryLayout>
        <Routes>
          <Route path='/nguyenhainam_store' element={<Home></Home>}></Route>
        </Routes>
      </PrimaryLayout>
    </BrowserRouter>
    
  );
}

export default App;
