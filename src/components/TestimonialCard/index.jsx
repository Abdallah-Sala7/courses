import { useEffect } from 'react';
import Aos from 'aos';

import './style.css'
import 'aos/dist/aos.css';

import { ali } from '../../assets/images'


const TestimonialCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="testimonial-card" data-aos="fade-up">
      <h2 className="testimonial-title">
        great course
      </h2>

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
          <h3 className="testimonial-name">
            john doe
          </h3>

          <p className="testimonial-job">
            web developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard