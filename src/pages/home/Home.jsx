import { useState } from 'react';

import './home.css'
import 'swiper/css';
import 'swiper/css/pagination';

import {studentIcon, coursesIcon, learnIcon, homeImgOne, homeImgTow, homeImgThree, brandOne, brandTow, brandThree, brandFour,brandFive, brandSix, categorie1, categorie2, categorie3, categorie4, categorie5, categorie6} from '../../assets/images'
import CategorieBox from '../../components/CategorieBox'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import CourseCard from '../../components/CourseCard';



const Home = () => {
  const [navTap, setNavTap] = useState('all')

  const handelNavTap = (e, tap) => {
    setNavTap(tap);
    e.preventDefault();
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="header-layout">
            <div className="header-details">
              <h1 className="header-title">
                learn new skills online with top
                <span>
                  Educators
                </span>
              </h1>

              <p className="header-info">
                build skills with courses, certificates, and degrees online from world-class universities and companies.
              </p>

              <div className="header-btn">
                <a href="#" className="join-btn">
                  join for free
                </a>

                <a href="#" className="learn-btn">
                  learn more
                </a>
              </div>

              <div className="header-features">
                <a href="#">
                  <img
                    src={studentIcon}
                    alt="students"
                    loading='lazy'
                  />
                  <p>Over 12 million students</p>
                </a>

                <a href="#">
                  <img
                    src={coursesIcon}
                    alt="courses"
                    loading='lazy'
                  />
                  <p>More than 60,000 courses</p>
                </a>

                <a href="#">
                  <img
                    src={learnIcon}
                    alt="learn"
                    loading='lazy'
                  />
                  <p>Learn anything online</p>
                </a>
              </div>
            </div>

            <div className="header-imgs">
              <div className="img-box-left">
                <img
                  src={homeImgOne}
                  alt="img1"
                  loading='lazy'
                />
              </div>

              <div className="img-box-right">
                <img
                  src={homeImgTow}
                  alt="img2"
                  loading='lazy'
                />

                <img
                  src={homeImgThree}
                  alt="img3"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>

        <div class="wave-container">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </header>

      <section className="our-clint">
        <div className="container">
          <p className="section-info">
            Trusted by the world’s best
          </p>

          <div className="clint-layout">
            <a href="#" className="clint">
              <img
                src={brandOne}
                alt="clint"
                loading='lazy'
              />
            </a>

            <a href="#" className="clint">
              <img
                src={brandTow}
                alt="clint"
                loading='lazy'
              />
            </a>

            <a href="#" className="clint">
              <img
                src={brandThree}
                alt="clint"
                loading='lazy'
              />
            </a>

            <a href="#" className="clint">
              <img
                src={brandFour}
                alt="clint"
                loading='lazy'
              />
            </a>

            <a href="#" className="clint">
              <img
                src={brandFive}
                alt="clint"
                loading='lazy'
              />
            </a>

            <a href="#" className="clint">
              <img
                src={brandSix}
                alt="clint"
                loading='lazy'
              />
            </a>
          </div>
        </div>
      </section>

      <section className="categorie">
        <div className="container">
          <h2 className="section-title">
            top categories
          </h2>

          <p className="section-info">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="categorie-layout">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2.1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5.2,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CategorieBox img={categorie1} title={'Graphic Design'} info={'1 Courses'} />
              </SwiperSlide>

              <SwiperSlide>
              <CategorieBox img={categorie2} title={'Sales Marketing'} info={'2 Courses'} />
              </SwiperSlide>

              <SwiperSlide>
                <CategorieBox img={categorie3} title={'IT and Software'} info={'3 Courses'} />
              </SwiperSlide>

              <SwiperSlide>
                <CategorieBox img={categorie4} title={'Art & Humanities'} info={'9 Courses'} />
              </SwiperSlide>

              <SwiperSlide>
                <CategorieBox img={categorie5} title={'Personal Development'} info={'5 Courses'} />
              </SwiperSlide>

              <SwiperSlide>
                <CategorieBox img={categorie6} title={'Finance & Accounting'} info={'7 Courses'} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="popular-courses">
        <div className="container">
          <h2 className="section-title">
            our most popular courses
          </h2>

          <p className="section-info">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="popular-layout">
            <div className="popular-nav">
              <a href="#" onClick={(e)=> handelNavTap(e, 'all')} className={`popular-tap ${navTap === 'all' && 'active'}`}>
                all
              </a>

              <a href="#" onClick={(e)=> handelNavTap(e, 'software')} className={`popular-tap ${navTap === 'software' && 'active'}`} >
                it & software
              </a>

              <a href="#" onClick={(e)=> handelNavTap(e, 'graphic')} className={`popular-tap ${navTap === 'graphic' && 'active'}`} >
                design
              </a>

              <a href="#" onClick={(e)=> handelNavTap(e, 'marketing')} className={`popular-tap ${navTap === 'marketing' && 'active'}`} >
                development
              </a>

              <a href="#" onClick={(e)=> handelNavTap(e, 'web')} className={`popular-tap ${navTap === 'web' && 'active'}`} >
                marketing
              </a>
            </div>

            <div className="popular-contint">
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home