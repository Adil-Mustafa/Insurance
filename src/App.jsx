import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Insurance from "./pages/Insurance";

function App() {
  return (
    <main className=''>
    <Routes>
        <Route path='/' element={<Insurance />} />
        <Route path='/' element={<Home />} />
    </Routes>
      </main>
  );
}

export default App;
