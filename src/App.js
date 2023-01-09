import './App.css';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { ListEmployeeComponent } from './components/ListEmployeeComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}/>
            <Route path="/employees" element={<ListEmployeeComponent />} />
          </Routes>
        </div>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
