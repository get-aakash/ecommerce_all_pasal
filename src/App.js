
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer } from "react-icons/fa";
import { ImCamera } from "react-icons/im";
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <FaBeer />
      <Button><ImCamera /></Button>
    <ToastContainer />
    </div>
  );
}

export default App;
