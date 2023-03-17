import "./style.css";

const CategorieBox = ({ img, title, info = "1 Courses" }) => {
  return (
    <div className="categorie-box">
      <div className="img-box">
        <img src={img} alt="categorie" loading="lazy" />
      </div>

      <div className="categorie-details">
        <h3 className="categorie-title">{title}</h3>

        <p className="categorie-info">{info}</p>
      </div>
    </div>
  );
};

export default CategorieBox;
