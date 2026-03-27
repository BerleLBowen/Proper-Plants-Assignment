export default function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item" style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
      <span>{item.image} {item.name}</span>
      <div>
        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
        <span style={{ margin: '0 10px' }}>Qty: {item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}