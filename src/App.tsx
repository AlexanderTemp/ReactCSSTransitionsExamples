import "./style.css";
import { Routes, Route,  Link } from "react-router-dom";
import Toggler from "./pages/Toggler";
import Progress from "./pages/Progress";
import Modal from './pages/Modal'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontal />} />
        <Route path="toggler" element={<Toggler/>}/>
        <Route path="modal" element={<Modal/>}/>
        <Route path="progress" element={<Progress/>}/>
      </Routes>
    </>
  );
}
function Frontal(){
  return(
    <div className="jaime">
      <nav>
        <h2>Opciones</h2>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link className="link" to="/toggler">Toggler</Link></li>
        </ul>
        <ul>
          <li><Link className="link" to="/modal">Modal</Link></li>
        </ul>
        <ul>
          <li><Link className="link" to="/progress">Progress</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default App;
