export default function PlantItem({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <span style={{ fontSize: '3rem' }}>{plant.image}</span>
      <h3>{plant.name}</h3>
      <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
    </div>
  );
}