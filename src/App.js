
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signin-signup/Signup';
import SignIn from './pages/signin-signup/SignIn';
import ResetPassword from './pages/signin-signup/ResetPassword';




function App() {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        

        {/* admin routes */}
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<SignIn />} />
        <Route path="reset-password" element={<ResetPassword />} />

        
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
