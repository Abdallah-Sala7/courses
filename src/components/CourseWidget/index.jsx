import './style.css'

import { 
  barChart, document, 
  reading, quizzeIcon, 
  languageIcon,
  certificateIcon, 
  heartIcon,
  shareIcon,
  enrollIcon
} from '../../assets/images'


const CourseWidget = ({days, level, student, sale, price}) => {
  return (
    <div className='course-widget'>
      <div className="course-vedio">
        <iframe 
          title="Working at Envato" 
          width="1280" 
          height="720" 
          src="https://www.youtube.com/embed/7e90gBu4pas?feature=oembed" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen=""
        ></iframe>
      </div>

      <div className="widget-body">
        <div className="course-widget-price">
          <p className="new-price">
            {price}$
          </p>

          {sale && <p className="old-price">{sale}$</p>}
        </div>

        <ul className="course-widget-list">
          <li className="course-widget-item">
            <div className="label">
              <img 
                src={reading} 
                alt="reading"
                loading='lazy' 
              />

              <span>Duration</span>
            </div>

            <p className='label-val'>
              {days} day
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={document} 
                alt="document"
                loading='lazy' 
              />

              <span>lessons</span>
            </div>

            <p className='label-val'>
              2
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={quizzeIcon} 
                alt="quizzeIcon"
                loading='lazy' 
              />

              <span>Quizzes</span>
            </div>

            <p className='label-val'>
              0
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={reading} 
                alt="reading"
                loading='lazy' 
              />

              <span>Maximum Students</span>
            </div>

            <p className='label-val'>
              {student}
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={languageIcon} 
                alt="languageIcon"
                loading='lazy' 
              />

              <span>Language</span>
            </div>

            <p className='label-val'>
              English, France
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={barChart} 
                alt="barChart"
                loading='lazy' 
              />

              <span>Skill level</span>
            </div>

            <p className='label-val'>
              {level}
            </p>
          </li>

          <li className="course-widget-item">
            <div className="label">
              <img 
                src={certificateIcon} 
                alt="certificateIcon"
                loading='lazy' 
              />

              <span>Certificate</span>
            </div>

            <p className='label-val'>
              yes
            </p>
          </li>
        </ul>

        <div className="widget-list-links">
          <a href="#" className="widget-link">
            <img
              src={heartIcon}
              alt='heartIcon'
              loading='lazy'
            />
            <span>Wishlist</span>
          </a>

          <a href="#" className="widget-link">
            <img
              src={shareIcon}
              alt='share icon'
              loading='lazy'
            />
            <span>Share</span>
          </a>

          <a href="#" className="widget-link">
            <img
              src={enrollIcon}
              alt='enroll icon'
              loading='lazy'
            />
            <span>enroll now</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseWidget