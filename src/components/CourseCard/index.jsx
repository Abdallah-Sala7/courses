import './style.css'

import {document, clock, barChart, ali} from '../../assets/images'

const CourseCard = ({ sales=false, oldPrice=false}) => {
  return (
    <div className='course-card'>
      {
        sales && <p className="sales">sale</p>
      }
      <div className='course-card-img'>
        <a href="#" className="overlay"></a>
        <img
          src='data:image/jpeg;base64,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'
          alt='course'
          loading='lazy'
        />
      </div>

      <div className='course-card-body'>
        <div className="course-rate"></div>

        <h2 className='course-title'>
          <a href='#' >
            Learn Figma – UI/UX Design Essential Training
          </a>
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
              2 Week
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
              Beginner
            </span>
          </div>
        </div>

        <div className="course-card-details">
          <div className="constructor">
            <div className="constructor-img">
              <img
                src={ali}
                alt='constructor img'
                loading='lazy'
              />
            </div>

            <a href="#" className="constructor-name">
              John Doe
            </a>
          </div>

          <div className="course-card-price">
            {
              oldPrice && <p className="old-price">$100</p>
            }

            <p className="new-price">
              $50
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard