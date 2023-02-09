import { Rating } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { check, clock, reading} from '../../assets/images'
import { useGetCourseByIdQuery } from '../../server/courseApi'

import './style.css'

const Details = () => {
  const param = useParams()

  const {data, error, isLoading} = useGetCourseByIdQuery(param.id)
  return (
  <>
    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : data ? (
    <>
    <header className='details-header'>
      <div className="container">
        <div className="details-header-info">
          <Link to={`/${data.category}`} className="header-category">
            { isLoading ? '' : data.category}
          </Link>
          
          <h1 className="details-title">
            {
              data.title
            }
          </h1>

          <p className="course-desc">
            {data.description}
          </p>

          <div className="course-details-info">
            <div className="details-info-box">
              <p className="rate-num">{data.rating}</p>

              <Rating 
                name="read-only"
                size='small'
                value={data.rating}  
                precision={0.5} 
                readOnly 
              />

              <p className="info-box-text">({data.totalRating})</p>
            </div>

            <div className="details-info-box">
              <img 
                src={reading} 
                alt='student icon'
                loading='lazy'
              />

              <p className="info-box-text">
                {data.totalStudent} Enrolled
              </p>
            </div>

            <div className="details-info-box">
              <img 
                src={clock} 
                alt='clock icon'
                loading='lazy'
              />

              <p className="info-box-text">
                {data.days} days
              </p>
            </div>
          </div>

          <div className="instructor">
            <div className="instructor-img">
              <img
                src={data.instructor.avatae}
                alt='instructor img'
                loading='lazy'
              />
            </div>

            <a href="#" className="instructor-name">
              {data.instructor.name}
            </a>
          </div>
        </div>
      </div>
    </header>

    <section className='overview'>
      <div className="container">
        <div className="overview-layout">
          <div className="overview-left">
            <div className="overview-box">
              <h1 className="overview-title">
                course overview
              </h1>
              
              <p className="overview-desc">
                {data.overview}
              </p>
            </div>

            <div className="overview-box">
              <h2 className="overview-title">
                What you’ll learn
              </h2>
              
              <ul className="overview-list">
                {data.learning.map((item, i) =>(
                  <li key={i} className='overview-item'>
                    <span className='overview-item-icon'>
                      <img 
                        src={check}
                        alt="" 
                        loading='lazy'
                      />
                    </span>

                    <span className='overview-item-text'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-box">
              <h3 className="overview-title">
                requirements
              </h3>
              
              <ul className="overview-list">
                {data.requirements.map((item, i) =>(
                  <li key={i} className='overview-item'>
                    <span className='overview-item-icon'>
                      <img 
                        src={check}
                        alt="" 
                        loading='lazy'
                      />
                    </span>

                    <span className='overview-item-text'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-box">
              <h4 className="overview-title">
                instructor
              </h4>
              
              <div className="overview-instructor-box">
                <div className="overview-instructor-avatar">
                  <img 
                    src={data.instructor.avatae} 
                    alt="" 
                    loading="lazy"
                  />
                </div>

                <div className="overview-instructor-info">
                  <h5 className='instructor-name'>{data.instructor.name}</h5>

                  <p className="instructor-jop">{data.instructor.jop}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)
    : null
    }
  </>
  )
}

export default Details