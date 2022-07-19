import './styles.css';
import CarImg from 'assets/images/car.png';

const CarCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Nome do carro" />
      </div>
      <div className="card-bottom-container">
        <h5>Audi Supra TT</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-secondary">
          <h6>COMPRAR</h6>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
