import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShowProducts from './components/ShowProducts';
import { Profile } from "./Profile";
import  { LoginButton} from "./Login";
import {LogoutButton} from "./Logout";
import logo from './logo.svg';
import './App.css';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
        <>
          <LogoutButton/>
          <Profile/>
          </>
        )  : (
          <LoginButton/>
        )}
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts></ShowProducts>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    

  );
}
export default App;
