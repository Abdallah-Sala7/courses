import './style.css'

import {document, clock, barChart} from '../../assets/images'
import { Link } from 'react-router-dom'

const CourseCard = ({id, title, image, price, sales, days, levels, IImg, IName}) => {
  return (
    <div className='course-card' data-aos="fade-up">
      {
        sales && <p className="sales">sale</p>
      }
      <div className='course-card-img'>
        <Link to={`details/${id}`} className="overlay"></Link>
        <img
          src={image}
          alt={title}
          loading='lazy'
        />
      </div>

      <div className='course-card-body'>
        <div className="course-rate"></div>

        <h2 className='course-title'>
          <Link to={`details/${id}`} >
            {title}
          </Link>
        </h2>

        <div className="course-info">
          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img
                src={document}
                alt='document'
                loading='lazy'
              />
            </span>
            <span className="course-info-item-text">
              1 Lessons
            </span>
          </div>

          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img
                src={clock}
                alt='clock'
                loading='lazy'
              />
            </span>
            <span className="course-info-item-text">
              {days} days
            </span>
          </div>

          <div className="course-info-item">
            <span className="course-info-item-icon">
              <img
                src={barChart}
                alt='bar chart'
                loading='lazy'
              />
            </span>
            <span className="course-info-item-text">
              {levels}
            </span>
          </div>
        </div>

        <div className="course-card-details">
          <div className="constructor">
            <div className="constructor-img">
              <img
                src={IImg}
                alt='constructor img'
                loading='lazy'
              />
            </div>

            <a href="#" className="constructor-name">
              {IName}
            </a>
          </div>

          <div className="course-card-price">
            {
              sales && <p className="old-price">{sales}$</p>
            }

            <p className="new-price">
              {price}$
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard