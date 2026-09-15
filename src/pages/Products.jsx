

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 25000,
      description: "Latest smartphone with modern features.",
      icon: "📱",
    },
    {
      id: 2,
      name: "Laptop",
      price: 55000,
      description: "Powerful laptop for work and study.",
      icon: "💻",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      description: "Comfortable wireless headphones.",
      icon: "🎧",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 3000,
      description: "Smart watch with fitness tracking features.",
      icon: "⌚",
    },
    {
      id: 5,
      name: "Camera",
      price: 45000,
      description: "High-quality camera for photography.",
      icon: "📷",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 2000,
      description: "Portable speaker with clear sound.",
      icon: "🔊",
    },
  ];

  return (
    <div className="page">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            
            <div className="product-image">
              {product.icon}
            </div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <strong>₹{product.price}</strong>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;