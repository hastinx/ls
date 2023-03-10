import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './component/list';
import Input from './component/input';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/ls/' element={<List />} />
        <Route path='/ls/input' element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
