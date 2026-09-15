import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      for (const item of cart) {
        await fetch("http://localhost:8080/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName: item.name,
            price: item.price,
          }),
        });
      }

      alert("Order Placed Successfully!");

      setCart([]);

      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>
                {item.icon} {item.name}
              </span>

              <strong>₹{item.price}</strong>
            </div>
          ))}

          <h2 className="cart-total">
            Total: ₹{total}
          </h2>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;