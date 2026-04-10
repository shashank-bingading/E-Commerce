import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubtract = (cartItems) => {
    if (cartItems.qty > 1) {
      dispatch(addToCart({ ...cartItems, qty: cartItems.qty - 1 }));
    }
  };
  const handleAdd = (cartItems) => {
    if (cartItems.qty < cartItems.stock) {
      dispatch(addToCart({ ...cartItems, qty: cartItems.qty + 1 }));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={handleCheckout} disabled={cartItems.length === 0}>
          Checkout
        </button>
        <button onClick={handleClearCart} disabled={cartItems.length === 0}>
          Clear Cart
        </button>
        <Link to="/">Continue Shopping</Link>
      </div>
      <div>
        {/* Cart items will be displayed here */}
        {cartItems.length === 0 ? (
          <p> Your Cart is Empty..</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <p>Quantity: {item.qty}</p>
              <button onClick={() => handleSubtract(item)}>-</button>
              <button onClick={() => handleAdd(item)}>+</button>
              <button onClick={() => handleRemoveFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartScreen;
