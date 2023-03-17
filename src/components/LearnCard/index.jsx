import "./style.css";

const LearnCard = ({ logo, title, desc }) => {
  return (
    <div className="learn-card" data-aos="fade-up">
      <div className="learn-logo">
        <img src={logo} alt="" loading="lazy" />
      </div>

      <h2 className="learn-title">{title}</h2>

      <p className="learn-desc">{desc}</p>
    </div>
  );
};

export default LearnCard;
