import './styles.css';
import CarCard from 'components/CardCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <div className="base-card search-container">
            <div className="search-content">
              <input type="text" className="search-input" id="search" name="search" placeholder="Digite sua busca" />
              <button className="btn btn-secondary btn-icon">
                <h6>BUSCAR</h6>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
