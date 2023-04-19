
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signin-signup/Signup';
import SignIn from './pages/signin-signup/SignIn';
import ResetPassword from './pages/signin-signup/ResetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import Category from './pages/category/Category';




function App() {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        

        {/* admin routes */}
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<SignIn />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />

        
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
