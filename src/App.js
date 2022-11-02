import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indonesia from './Components/Indonesia';
import Programming from './Components/Programming';
import Covid19 from './Components/Covid19';
import Navbar from './Components/Navbar/Index';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Indonesia />} />
          <Route exact path="Indonesia" element={<Indonesia />} />
          <Route exact path="programming" element={<Programming />} />
          <Route exact path="covid19" element={<Covid19 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
