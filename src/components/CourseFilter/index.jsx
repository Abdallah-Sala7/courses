import { useState } from 'react'
import { useGetCourseQuery } from '../../server/courseApi'

import './style.css'

const CourseFilter = () => {
  const { data, loading, error } = useGetCourseQuery();  

  const [courseFilterFild] = useState({
    category:[],
    instructor:[],
    levels:[],
    rating:[1, 2, 3, 4, 5]
  });

  const [courseFilterValue] = useState({
    category:[],
    instructor:[],
    levels:[],
    rating:5
  });
  
  data?.map((item) =>(
    !courseFilterFild.category.includes(item.category) && courseFilterFild.category.push(item.category),
    !courseFilterFild.instructor.includes(item.instructor.name) && courseFilterFild.instructor.push(item.instructor.name),
    !courseFilterFild.levels.includes(item.levels) && courseFilterFild.levels.push(item.levels)
  ))

  const handleCategory = (val) =>{
    if(courseFilterValue.category.includes(val)){
      let valIndex = courseFilterValue.category.indexOf(val);
      courseFilterValue.category.splice(valIndex,1)
    }else{
      courseFilterValue.category.push(val)
    }
    {console.log(courseFilterValue)}
  }

  const handleInstructor = (val) =>{
    if(courseFilterValue.instructor.includes(val)){
      let valIndex = courseFilterValue.instructor.indexOf(val);
      courseFilterValue.instructor.splice(valIndex,1)
    }else{
      courseFilterValue.instructor.push(val)
    }
  }

  const handleLevels = (val) =>{
    if(courseFilterValue.levels.includes(val)){
      let valIndex = courseFilterValue.levels.indexOf(val);
      courseFilterValue.levels.splice(valIndex,1)
    }else{
      courseFilterValue.levels.push(val)
    }
  }

  const handleRating = (val) =>{
    courseFilterValue.rating = val
  }

  return (<>
    <div className="filter-box">
      <h1 className="filter-box-title">
        Categories
      </h1>

      <ul className="filter-box-list" >
        {courseFilterFild.category.map((item, i) =>(
          <li key={i}  className='filter-box-item'> 
            <input 
              type="checkbox" 
              name={item} 
              id={item} 
              onChange={() => handleCategory(item)} 
            />

            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>

    <div className="filter-box">
      <h1 className="filter-box-title">
        instructor
      </h1>

      <ul className="filter-box-list" >
        {courseFilterFild.instructor.map((item, i) =>(
          <li key={i}  className='filter-box-item'> 
            <input 
              type="checkbox" 
              name={item} 
              id={item} 
              onChange={() => handleInstructor(item)} 
            />

            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>

    <div className="filter-box">
      <h1 className="filter-box-title">
        levels
      </h1>

      <ul className="filter-box-list" >
        {courseFilterFild.levels.map((item, i) =>(
          <li key={i}  className='filter-box-item'> 
            <input 
              type="checkbox" 
              name={item} 
              id={item} 
              onChange={() => handleLevels(item)} 
            />

            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>

    <div className="filter-box">
      <h1 className="filter-box-title">
        rating
      </h1>

      <ul className="filter-box-list" >
        {courseFilterFild.rating.map((item, i) =>(
          <li key={i}  className='filter-box-item'> 
            <input 
              type={"radio"}
              name={"radio-fil"} 
              id={item} 
              onChange={() => handleRating(item)} 
            />

            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
</>)
}

export default CourseFilter