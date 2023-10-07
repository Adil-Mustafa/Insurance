import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Insurance from "./pages/Insurance";

function App() {
  return (
    <main className=''>
    <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='insurance' element={<Insurance />} /> */}
    </Routes>
      </main>
  );
}

export default App;
