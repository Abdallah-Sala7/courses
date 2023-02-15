import { useState } from 'react'
import { useDispatch } from 'react-redux';

import './style.css';

import { useGetCourseQuery } from '../../server/courseApi';
import { 
  setInstructorValue, setLevelsValue, 
  setRatingValue, setCategoryValue,
  setSearch
} from '../../store/reducers/filterSlice';
import { searchIcon } from '../../assets/images';
import { Rating } from '@mui/material';

const CourseFilter = ({categoryParm}) => {
  const { data, isLoading, isError } = useGetCourseQuery();  

  const [courseFilterFild] = useState({
    category:[],
    instructor:[],
    levels:[],
    rating:[1, 2, 3, 4, 5]
  });

  const dispatch = useDispatch()
  
  data?.map((item) =>(
    !courseFilterFild.category.includes(item.category) && courseFilterFild.category.push(item.category),
    !courseFilterFild.instructor.includes(item.instructor.name) && courseFilterFild.instructor.push(item.instructor.name),
    !courseFilterFild.levels.includes(item.levels) && courseFilterFild.levels.push(item.levels)
  ))

  if (isError) return 'Something went wrong ...'
  
  if (isLoading) return 'Loading ......' 
  
  if (data) {
    return (
      <div className='filter'>
        <div className="filter-box">
          <div className="form-group">
            <input 
              type="text" 
              placeholder='search courses'
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />

            <img 
              src={searchIcon} 
              alt="search icon" 
              loading='lazy'
            />
          </div>
        </div>
        {
          !categoryParm && 
          <div className="filter-box">
            <h3 className="filter-box-title">
              Categories
            </h3>

            <ul className="filter-box-list">
              {courseFilterFild.category.map((item, i) =>(
                <li key={i}  className='filter-box-item'> 
                  <input 
                    type="checkbox" 
                    name={item} 
                    id={item} 
                    onChange={() => dispatch(setCategoryValue(item))} 
                  />

                  <label htmlFor={item}>{item}</label>
                </li>
              ))}
            </ul>
          </div> 
        }

        <div className="filter-box">
          <h3 className="filter-box-title">
            instructor
          </h3>

          <ul className="filter-box-list" >
            {courseFilterFild.instructor.map((item, i) =>(
              <li key={i}  className='filter-box-item'> 
                <input 
                  type="checkbox" 
                  name={item} 
                  id={item} 
                  onChange={() => dispatch(setInstructorValue(item))} 
                />

                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-box">
          <h3 className="filter-box-title">
            levels
          </h3>

          <ul className="filter-box-list" >
            {courseFilterFild.levels.map((item, i) =>(
              <li key={i}  className='filter-box-item'> 
                <input 
                  type="checkbox" 
                  name={item} 
                  id={item} 
                  onChange={() => dispatch(setLevelsValue(item))} 
                />

                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-box">
          <h3 className="filter-box-title">
            rating
          </h3>

          <ul className="filter-box-list" >
            {courseFilterFild.rating.map((item, i) =>(
              <li key={i}  className='filter-box-item'> 
                <input 
                  type={"radio"}
                  name={"radio-fil"} 
                  id={item} 
                  onChange={() => dispatch(setRatingValue(item))} 
                />

                <label htmlFor={item}> 
                  <Rating 
                    name='coursRate'
                    value={item}
                    readOnly
                    size='small'
                  /> 
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CourseFilter