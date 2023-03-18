import { useSelector } from "react-redux";
import { CartCard } from "../../components";
import "./style.css";

const Cart = () => {
  const { total, cart, count } = useSelector((state) => state.cart);
  return (
    <>
      <header className="cart-header">
        <div className="container">
          <h1 className="section-title">shopping cart</h1>

          <h2 className="section-info">{count} Courses in Cart</h2>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <CartCard item={item} />
              ))}
            </div>

            <div className="cart-summary">
              <p>Total :</p>

              <h3 className="total-price">${total}</h3>

              <a href="#" className="checkout-btn">
                checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
