import MainImg from 'assets/images/main-image.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-image-container">
          <img src={MainImg} alt="Imagem home" />
        </div>
      </div>
      <div className="base-card">
        <div className="home-btn-container">
          <Link to={'/cars'} className="btn-link">
            <button className="btn btn-secondary">
              <h6>VER CATÁLOGO</h6>
            </button>
          </Link>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
