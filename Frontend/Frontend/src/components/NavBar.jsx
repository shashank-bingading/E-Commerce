import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);
  const {cartItems} = useSelector(state => state.cart);

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
          Cart ({cartItems.reduce ((total, item) => total + item.quantity, 0)})
        </Link>
        {userInfo ? (
          <>
            <span>Welcome, {userInfo.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
