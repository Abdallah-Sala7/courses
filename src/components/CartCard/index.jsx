import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/reducers/cartSlice";
import RatingBox from "../RatingBox";
import "./style.css";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-card">
      <div className="cart-card-left">
        <div className="cart-card-img">
          <img src={item.image} alt={item.title} loading="lazy" />
        </div>

        <div className="cart-card-body">
          <h1 className="cart-card-title">{item.title}</h1>

          <h2 className="cart-card-name">By {item.instructor.name}</h2>

          <div className="cart-card-features">
            <h3 className="feature">{item.category}</h3>

            <RatingBox rating={item.rating} totalRating={item.totalRating} />
          </div>

          <div className="cart-card-details">
            <span>{item.totalStudent} total student</span>
            <span>{item.days} days</span>
            <span>{item.levels}</span>
          </div>
        </div>
      </div>

      <div className="cart-card-right">
        <h4 className="cart-card-price">${item.price}</h4>

        <button
          className="cart-card-btn"
          onClick={() => dispatch(removeFromCart(item))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
