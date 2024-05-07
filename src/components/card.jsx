export function Card({ item }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={item.image} alt="card" />
      </div>
      <div className="card__title">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}
