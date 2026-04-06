import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
const NavBar = () => {
  const dispatch = useDispatch();
  const { userinfo } = useSelector(state => state.auth);
  const {cartitems} = useSelector(state => state.cart);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav >
      <div>
        <Link to="/">Home</Link>  
      </div>
      <div>
        <Link to="/cart">
        
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
