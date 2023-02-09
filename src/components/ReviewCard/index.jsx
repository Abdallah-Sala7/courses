import { Rating } from '@mui/material'

import './style.css'

import { ali } from '../../assets/images'

const ReviewCard = () => {
  return (
    <div className='review-card'>
      <div className="review-img">
        <img 
          src={ali} 
          alt="ali image" 
          loading='lazy'
        />
      </div>

      <div className="review-contint">
        <div className="review-top">
          <h1 className='review-name'>
            abdallah salah
          </h1>

          <p className="review-date">
            August 19, 2022
          </p>
        </div>

        <div className="rating">
          <Rating 
            name='readonly' 
            value={5} 
            size={'small'} 
            readOnly
          />
        </div>

        <div className="review-desc">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard