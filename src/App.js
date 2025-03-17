
// import './App.css';
// import Pages from './pages';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import User from './pages/user';
import Landing from './pages/Landing';
// import LoginForm from './pages/Login';

function App() {
  return (
    <div className="App">
      {/* <Pages/> */}

       <Routes>
        {/* <Route path="/" element={<Pages />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
      </Routes> 
      
    </div>
  );
}

export default App;
