import { useState } from 'react';

import './home.css'
import 'swiper/css';
import 'swiper/css/pagination';

import {studentIcon, coursesIcon, learnIcon, homeImgOne, homeImgTow, homeImgThree, brandOne, brandTow, brandThree, brandFour,brandFive, brandSix, categorie1, categorie2, categorie3, categorie4, categorie5, categorie6, check, learning, working, education} from '../../assets/images'
import CategorieBox from '../../components/CategorieBox'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import CourseCard from '../../components/CourseCard';
import TestimonialCard from '../../components/TestimonialCard';
import LearnCard from '../../components/LearnCard';



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
              <CourseCard />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <h1 className="section-title">
            what people say
          </h1>

          <p className="section-info">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="testimonial-layout">
            <div className="testimonial-contint">
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              </Swiper>              
            </div>

            <div className="testimonial-details">
              <div className="details-box">
                <p className="details-number">
                  380,000+
                </p>

                <p className="details-info">
                  students enrolled
                </p>
              </div>

              <div className="details-box">
                <p className="details-number">
                  50,000+
                </p>

                <p className="details-info">
                  Total course views
                </p>
              </div>

              <div className="details-box">
                <p className="details-number">
                  18,000+
                </p>

                <p className="details-info">
                  Five-star course reviews
                </p>
              </div>

              <div className="details-box">
                <p className="details-number">
                  100,000+
                </p>

                <p className="details-info">
                  students comunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section className="join">
        <div className="container">
          <div className="join-layout">
            <div className="join-contint">
              <h1 className="section-title">
                <span>learn </span> new skills when and where you like.
              </h1>

              <p className="section-info">
                Use the list below to bring attention to your product’s key differentiator.
              </p>

              <ul className="join-feature">
                <li>
                  <span className='join-icon'>
                    <img 
                      src={check}
                      alt=""
                      loading='lazy' 
                    />
                  </span>
                  <p>Hand-Picked Authors</p>
                </li>

                <li>
                  <span className='join-icon'>
                    <img 
                      src={check}
                      alt=""
                      loading='lazy' 
                    />
                  </span>
                  <p>Easy To Follow Curriculum</p>
                </li>

                <li>
                  <span className='join-icon'>
                    <img 
                      src={check}
                      alt=""
                      loading='lazy' 
                    />
                  </span>
                  <p>Free Courses</p>
                </li>

                <li>
                  <span className='join-icon'>
                    <img 
                      src={check}
                      alt=""
                      loading='lazy' 
                    />
                  </span>
                  <p>Money-Back Guarantee</p>
                </li>
              </ul>

              <a href="#" className="join-btn">
                join now
              </a>
            </div>

            <div className="join-img">
              <img
                src={homeImgOne}
                alt=""
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      <section className="learn">
        <div className="container">
          <h1 className="section-title">
            why learn with our courses?
          </h1>

          <p className="section-info">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="learn-layout">
            <LearnCard logo={learning} title={'01. Learn'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
            <LearnCard logo={education} title={'02. Graduate'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
            <LearnCard logo={working} title={'03. Work'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home