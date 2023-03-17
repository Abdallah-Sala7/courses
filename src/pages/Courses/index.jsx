import "./style.css";

import { CourseCard, CourseFilter } from "../../components";
import { useGetCourseQuery } from "../../server/courseApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { closeIcon, listIcon } from "../../assets/images";
import { useParams } from "react-router-dom";

const Courses = () => {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [categoryParm, setCategoryParm] = useState(false);
  const [coursesItems, setCoursesItems] = useState([]);

  const { data, isLoading } = useGetCourseQuery();
  const { category, levels, instructor, rating, search } = useSelector(
    (state) => state.filters
  );

  const param = useParams();

  useEffect(() => {
    let filterData = data;

    if (param.category) {
      filterData = filterData?.filter(
        (item) => item.category === param.category
      );

      setCategoryParm(true);
    } else setCategoryParm(false);

    if (category.length > 0) {
      filterData = filterData?.filter((item) =>
        category.includes(item.category)
      );
    }

    if (levels.length > 0) {
      filterData = filterData?.filter((item) => levels.includes(item.levels));
    }

    if (instructor.length > 0) {
      filterData = filterData?.filter((item) =>
        instructor.includes(item.instructor.name)
      );
    }

    if (rating > 0) {
      filterData = filterData?.filter((item) => item.rating >= rating);
    }

    if (search) {
      filterData = filterData?.filter((item) =>
        item.title
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );
    }

    setCoursesItems(filterData);
  }, [category, data, levels, instructor, rating, search, param]);

  const handleFilterMenu = () => {
    setOpenFilterMenu(!openFilterMenu);
  };

  if (isLoading) return "loading.......";

  return (
    <section className="courses-section">
      <div className="container">
        <div className="courses-layout">
          <div className={`courses-filter ${openFilterMenu && "oppenned"}`}>
            <CourseFilter categoryParm={categoryParm} />
          </div>

          <div className="courses-contint">
            {coursesItems?.map((item, i) => (
              <CourseCard item={item} />
            ))}
          </div>
        </div>
      </div>

      <button className="handle-filter-menu" onClick={handleFilterMenu}>
        {openFilterMenu ? (
          <img src={closeIcon} alt="close icon" loading="lazy" />
        ) : (
          <img src={listIcon} alt="close icon" loading="lazy" />
        )}
      </button>

      <div
        className={`overlay ${openFilterMenu && "oppenned"}`}
        role="button"
        onClick={handleFilterMenu}
      ></div>
    </section>
  );
};

export default Courses;
