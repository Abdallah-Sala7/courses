import "./style.css";

const CardLoading = () => {
  return (
    <div className="loading-card">
      <div className="loading loading-card-img"></div>

      <div className="loading-card-body">
        <div className="loading loading-rate"></div>

        <div className="loading loading-title"></div>

        <div className="loading-card-details">
          <div className="loading loading-constructor"></div>

          <div className="loading loading-card-price"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
