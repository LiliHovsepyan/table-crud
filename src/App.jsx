import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./componets/NavBar";
import UserPage from "./pages/users/UserPage";
import AddUserPage from "./pages/users/AddUserPage";
import EditUserPage from "./pages/users/EditUserPage";


const App = () => {
    return (
        <div className="App">
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/contact' element={<ContactPage/>}/>

              <Route path='/users/add' element={<AddUserPage/>}/>
              <Route path='/users/edit/:id' element={<EditUserPage/>}/>
              <Route path='/users/:id' element={<UserPage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
    );
};

export default App;
