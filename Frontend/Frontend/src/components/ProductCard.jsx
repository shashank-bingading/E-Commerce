import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </Link>
      <div>
        <Link to ={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>${product.price.toFixed(2)}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;