import { Rating } from '@mui/material'
import './style.css'

const CustomForm = ({isRate, isLabel, action}) => {
  return (
    <form action="">
      <div className="form-group">
        <div class="form-action">
          {isLabel && <label htmlFor="inputName" class="form-label">Name</label>}

          <div class="form-control">
            <input 
              type="text"  
              name="inputName" 
              id="inputName" 
              placeholder="Abdallah salah" 
            />
          </div>
        </div>

        <div class="form-action">
          {isLabel && <label htmlFor="inputName" class="form-label">Email</label>}

          <div class="form-control" >
            <input 
              type="email" 
              name="inputName" 
              id="inputName" 
              placeholder="abdallahsalah138@gmail.com" 
            />
          </div>
        </div>

        { isRate && (
        <div className="review-rating">
          <p className='rate-text'>What is it like to Course?</p>

          <Rating 
            name='review-rating'
            defaultValue={5}
            size={'small'}
          />
        </div>)}

        <div class="form-action">
          {isLabel && <label htmlFor="inputName" class="form-label">Message</label>}

          <div class="form-control" >
            <textarea 
              name="messagetName" 
              id="messagetName" 
              cols="30" 
              rows="10"
            ></textarea>
          </div>
        </div>

        <div className="form-btn">
          <a href="#">
            {action  === 'review' ? 'submit review' : 'message' ? 'Send Message' : 'add'}
          </a>
        </div>        
      </div>
    </form>
  )
}

export default CustomForm