import { Rating } from '@mui/material'
import './style.css'

const RatingBox = ({rating, totalRating}) => {
  return (
    <div className="details-info-box">
    <p className="rate-num">{rating}</p>

    <Rating
      name="read-only"
      size="small"
      value={rating}
      precision={0.5}
      readOnly
    />

    <p className="info-box-text">({totalRating})</p>
  </div>
  )
}

export default RatingBox