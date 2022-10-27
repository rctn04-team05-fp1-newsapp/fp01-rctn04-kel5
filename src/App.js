import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indonesia from "./Components/Indonesia/indonesia";
import Programming from "./Components/Programming/programming";
import Covid19 from "./Components/Covid19/covid19";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="indonesia" element={<Indonesia />} />
          <Route exact path="programming" element={<Programming />} />
          <Route exact path="covid19" element={<Covid19 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
