import './style.css'

import {facebookLogo, twitterLog, instagramLogo, star, reading, play} from '../../assets/images'

const InstructorCard = ({img, name, rate, job, student, courses}) => {
  return (
    <div className='instructor-card' data-aos="fade-up">
      <div className="instructor-img">
        <img 
          src={img} 
          alt=""
          loading='lazy'
        />

        <div className="instructor-contact">
          <a href="#" target="_blank" aria-label='facebook' rel="noreferrer">
            <img 
              src={facebookLogo} 
              alt=""
              loading='lazy'
            />
          </a>

          <a href="#" target="_blank" aria-label='twitter' rel="noreferrer">
            <img 
              src={twitterLog} 
              alt=""
              loading='lazy'
            />          
          </a>

          <a href="#" target="_blank" aria-label='instagram' rel="noreferrer">
            <img 
              src={instagramLogo}
              alt=""
              loading='lazy'
            />          
          </a>
        </div>
      </div>

      <div className="instructor-card-body">
        <h2 className="instructor-name">
          {name}
        </h2>

        <h3 className="instructor-job">
          {job}
        </h3>

        <div className="instructor-card-info">
          <div className="instructor-box">
            <img 
              src={star} 
              alt="" 
              loading='lazy'
              className="star" 
            />

            <p className="instructor-box-text">
              {rate}
            </p>
          </div>

          <div className="instructor-box">
            <img 
              src={reading}
              alt=""
              loading='lazy'
            />

            <p className="instructor-box-text">
              {student} Students
            </p>
          </div>

          <div className="instructor-box">
            <img
              src={play}
              alt=""
              loading='lazy'
            />

            <p className="instructor-box-text">
              {courses} Courses
            </p>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default InstructorCard