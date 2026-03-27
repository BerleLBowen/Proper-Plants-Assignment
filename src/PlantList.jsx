import PlantItem from './PlantItem';

export default function PlantList({ plants, onAddToCart }) {
  return (
    <section>
      <h2>Available Plants</h2>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {plants.map(plant => (
          <PlantItem key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
