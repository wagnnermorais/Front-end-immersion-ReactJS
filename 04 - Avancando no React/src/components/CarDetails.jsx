/* eslint-disable react/prop-types */
const CarDetails = ({ brand, color, km }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>A marca do carro é: {brand}</li>
        <li>A cor do carro é: {color}</li>
        <li>A quilometragem do carro é: {km} KM</li>
      </ul>
    </div>
  );
};

export default CarDetails;
