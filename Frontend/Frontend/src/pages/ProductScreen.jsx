import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import {addToCart} from "../store/cartSlice";
import { useState } from "react";

// Placeholder for product details screen
const ProductScreen = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = items.find((item)=>item._id === id);
  const [quantity, setQuantity] = useState(1);


  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: quantity }));
    navigate("/cart");
  };

  if (!product) {
    return <p>Product not found</p>;
  }
  else {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {product.countInStock > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty < product.countInStock ? qty + 1 : qty)}>+</button>
            </div>
          )}
        </div>
    );
  }
};

export default ProductScreen;