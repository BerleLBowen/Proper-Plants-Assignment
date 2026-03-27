import CartItem from './CartItem';

export default function Cart({ cartItems, onUpdateQuantity }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={onUpdateQuantity} 
          />
        ))
      )}
    </section>
  );
}