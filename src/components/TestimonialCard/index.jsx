import './style.css'

import { ali } from '../../assets/images'

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <h3 className="testimonial-title">
        great course
      </h3>

      <p className="testimonial-desc">
      “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”
      </p>

      <div className="testimonial-info">
        <img
          src={ali}
          alt="testimonial"
          loading='lazy'
        />

        <div className="testimonial-info-text">
          <h4 className="testimonial-name">
            john doe
          </h4>

          <p className="testimonial-job">
            web developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard