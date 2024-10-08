// src/Product.jsx

export default function Product({ name, price, imgUrl }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt="Tacos With Lime" width="640" />
      <p>Price: {price} credits</p>
    </div>
  );
}
