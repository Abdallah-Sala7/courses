import { Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./style.css";

import { useGetCourseByIdQuery } from "../../server/courseApi";

import {
  chatbubble,
  check,
  clock,
  play,
  reading,
  star,
} from "../../assets/images";

import { ReviewCard, CustomForm, CourseWidget, Loading } from "../../components";

const Details = () => {
  const param = useParams();

  const { data, error, isLoading } = useGetCourseByIdQuery(param.id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header className="details-header">
        <div className="container">
          <div className="details-header-info">
            <Link to={`/courses/${data.category}`} className="header-category">
              {data.category}
            </Link>

            <h1 className="details-title">{data.title}</h1>

            <p className="course-desc">{data.description}</p>

            <div className="course-details-info">
              <div className="details-info-box">
                <p className="rate-num">{data.rating}</p>

                <Rating
                  name="read-only"
                  size="small"
                  value={data.rating}
                  precision={0.5}
                  readOnly
                />

                <p className="info-box-text">({data.totalRating})</p>
              </div>

              <div className="details-info-box">
                <img src={reading} alt="student icon" loading="lazy" />

                <p className="info-box-text">{data.totalStudent} Enrolled</p>
              </div>

              <div className="details-info-box">
                <img src={clock} alt="clock icon" loading="lazy" />

                <p className="info-box-text">{data.days} days</p>
              </div>
            </div>

            <div className="instructor">
              <div className="instructor-img">
                <img
                  src={data.instructor.avatae}
                  alt="instructor img"
                  loading="lazy"
                />
              </div>

              <a href="#" className="instructor-name">
                {data.instructor.name}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="overview">
        <div className="container">
          <div className="overview-layout">
            <div className="overview-left">
              <div className="overview-box">
                <h2 className="overview-title">course overview</h2>

                <p className="overview-desc">{data.overview}</p>
              </div>

              <div className="overview-box">
                <h2 className="overview-title">What you’ll learn</h2>

                <ul className="overview-list">
                  {data.learning.map((item, i) => (
                    <li key={i} className="overview-item">
                      <span className="overview-item-icon">
                        <img src={check} alt="" loading="lazy" />
                      </span>

                      <span className="overview-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overview-box">
                <h2 className="overview-title">requirements</h2>

                <ul className="overview-list">
                  {data.requirements.map((item, i) => (
                    <li key={i} className="overview-item">
                      <span className="overview-item-icon">
                        <img src={check} alt="" loading="lazy" />
                      </span>

                      <span className="overview-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overview-box">
                <h2 className="overview-title">instructor</h2>

                <div className="overview-instructor-box">
                  <div className="overview-instructor-avatar">
                    <img src={data.instructor.avatae} alt="" loading="lazy" />
                  </div>

                  <div className="overview-instructor-info">
                    <Link
                      to={`${data.instructor.name}`}
                      className="instructor-name"
                    >
                      {data.instructor.name}
                    </Link>

                    <p className="instructor-jop">{data.instructor.jop}</p>

                    <div className="course-details-info">
                      <div className="details-info-box">
                        <img
                          src={star}
                          alt="star icon"
                          loading="lazy"
                          className="star"
                        />

                        <p className="info-box-text">{data.instructor.rate}</p>
                      </div>

                      <div className="details-info-box">
                        <img
                          src={chatbubble}
                          alt="student icon"
                          loading="lazy"
                        />

                        <p className="info-box-text">
                          {data.instructor.student} Reviews
                        </p>
                      </div>

                      <div className="details-info-box">
                        <img src={reading} alt="student icon" loading="lazy" />

                        <p className="info-box-text">
                          {data.instructor.student} Student
                        </p>
                      </div>

                      <div className="details-info-box">
                        <img src={play} alt="student icon" loading="lazy" />

                        <p className="info-box-text">
                          {data.instructor.courses} courses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overview-box">
                <h2 className="overview-title">reviews (2)</h2>

                <div className="review-layout">
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>

              <div className="overview-box">
                <h2 className="overview-title">add reviews</h2>

                <div className="review-form">
                  <CustomForm isLabel={false} isRate={true} action="review" />
                </div>
              </div>
            </div>

            <div className="overview-right">
              <CourseWidget item={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
