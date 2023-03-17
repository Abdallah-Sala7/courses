import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

import "./style.css";

import { document, clock, barChart } from "../../assets/images";

const CourseCard = ({ item }) => {
  return (
    <div className="course-card" data-aos="fade-up">
      {item.sales && <p className="sales">sale</p>}
      <div className="course-card-img">
        <Link
          to={`/details/${item.id}`}
          aria-label={item.title}
          className="overlay"
        ></Link>
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>

      <div className="course-card-body">
        <div className="course-rate">
          <span className="rate-num">{item.rating}</span>

          <Rating
            name="coursRate"
            value={item.rating}
            precision={0.5}
            readOnly
            size="small"
          />

          <span className="rate-count">({item.totalRating})</span>
        </div>

        <h2 className="course-title">
          <Link to={`/details/${item.id}`}>{item.title}</Link>
        </h2>

        <div className="course-info">
          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img src={document} alt="document" loading="lazy" />
            </span>
            <span className="course-info-item-text">1 Lessons</span>
          </div>

          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img src={clock} alt="clock" loading="lazy" />
            </span>
            <span className="course-info-item-text">{item.days} days</span>
          </div>

          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img src={barChart} alt="bar chart" loading="lazy" />
            </span>
            <span className="course-info-item-text">{item.levels}</span>
          </div>
        </div>

        <div className="course-card-details">
          <div className="constructor">
            <div className="constructor-img">
              <img
                src={item.instructor.image}
                alt="constructor img"
                loading="lazy"
              />
            </div>

            <a href="#" className="constructor-name">
              {item.instructor.name}
            </a>
          </div>

          <div className="course-card-price">
            {item.sales && <p className="old-price">{item.sales}$</p>}

            <p className="new-price">{item.price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
