import MainImg from 'assets/images/main-image.png';
import Navbar from 'components/Navbar';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
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
            <button className="btn btn-secondary btn-icon">
              <h6>VER CATÁLOGO</h6>
            </button>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
