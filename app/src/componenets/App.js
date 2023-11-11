import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignUpPage from "../pages/SignUpPage";
import LogoutPage from "../pages/LogoutPage";
import RequireLogin from "./RequireLogin";

function App() {

  return (

    <div className="App">
      <BrowserRouter>

      <ul>
        <li>
          <Link to= "/">Home</Link>
        </li>
        <li>
          <Link to= "/login">LogIn</Link>
        </li>
        <li>
          <Link to= "/signup">SignUp</Link>
        </li>
        <li>
          <Link to= "/logout">Logout</Link>
        </li>
      </ul>
      <Routes>
        <Route index element = { <RequireAuth> <NotesPage/>  </RequireAuth>}/>
        <Route path = "/login"  element={<RequireLogin><LoginPage/></RequireLogin>} />
        <Route path = "/signup"  element={<RequireLogin><SignUpPage/></RequireLogin>} />
        <Route path = "/logout"  element={<LogoutPage/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
