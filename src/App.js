import logo from './logo.svg';
import './App.css';
import SignUp from './project/SignUp';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SignIn from './project/SignIn';
import DashBoard from './project/DashBoard';

function App() {
  return (
    <>
    {/* <SignUp/> */}
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<SignUp/>}/>
      <Route path={"/SignIn"} element={<SignIn/>}/>
      <Route path={"/dashboard"} element={<DashBoard/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
