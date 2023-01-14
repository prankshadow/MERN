import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter as Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

