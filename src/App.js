import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Main from './components/Main';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Fruits from './Products/Fruits';
import Vegetables from './Products/Vegetables';
import Header from './components/Header';
import Wishlist from './Products/Wishlist';
import Cart from './Products/Cart';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Header></Header>
        <Dropdown></Dropdown>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/fruits' element={<Fruits></Fruits>}></Route>
          <Route path='/vegetables' element={<Vegetables></Vegetables>}></Route>
          <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
