import { Rating } from '@mui/material'
import './style.css'

const ReviewForm = () => {
  return (
    <form action="">
      <div className="form-action">
        <div className="form-groub">
          <input 
            type="text" 
            title='name' 
            placeholder='your name' 
          />            
        </div>

        <div className="form-groub">
          <input 
            type="email" 
            title='email' 
            placeholder='your email' 
          />            
        </div>

        <div className="review-rating">
          <p className='rate-text'>What is it like to Course?</p>

          <Rating 
            name='review-rating'
            defaultValue={5}
            size={'small'}
          />
        </div>

        <div className="text-area">
          <textarea name="" id="" placeholder='your massge....' cols="30" rows="10"></textarea>
        </div>  

        <div className="form-btn">
          <a href="#">
            submit review
          </a>
        </div>        
      </div>
    </form>
  )
}

export default ReviewForm