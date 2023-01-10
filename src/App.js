import './App.css';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { ListEmployeeComponent } from './components/ListEmployeeComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AddEmployeeComponent } from './components/AddEmployeeComponent';


function App() {
  return (
    <div>

      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />}/>
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
