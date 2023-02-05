import { useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Aos from 'aos';

import './home.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import {studentIcon, coursesIcon, learnIcon, homeImgOne, homeImgTow, homeImgThree, brandOne, brandTow, brandThree, brandFour,brandFive, brandSix, categorie1, categorie2, categorie3, categorie4, categorie5, categorie6, check, learning, working, education, instructorImg} from '../../assets/images'
import CourseCard from '../../components/CourseCard';
import TestimonialCard from '../../components/TestimonialCard';
import LearnCard from '../../components/LearnCard';
import CategorieBox from '../../components/CategorieBox'
import NavTap from '../../components/NavTap';
import InstructorCard from '../../components/InstructorCard';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <header>
        <div className="container">
          <div className="header-layout">
            <div className="header-details">
              <h1 className="header-title" data-aos="fade-up">
                learn new skills online with top
                <span>
                  Educators
                </span>
              </h1>

              <p className="header-info" data-aos="fade-up" data-aos-delay="200" >
                build skills with courses, certificates, and degrees online from world-class universities and companies.
              </p>

              <div className="header-btn" data-aos="fade-up" data-aos-delay="400">
                <a href="#" className="join-btn">
                  join for free
                </a>

                <a href="#" className="learn-btn">
                  learn more
                </a>
              </div>

              <div className="header-features" data-aos="fade-up">
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
                  data-aos="fade-up"
                />
              </div>

              <div className="img-box-right" >
                <img
                  src={homeImgTow}
                  alt="img2"
                  loading='lazy'
                  data-aos="fade-up"
                  data-aos-delay="300"
                />

                <img
                  src={homeImgThree}
                  alt="img3"
                  loading='lazy'
                  data-aos="fade-up"
                  data-aos-delay="600"
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
          <p className="section-info" data-aos="fade-up">
            Trusted by the world’s best
          </p>

          <div className="clint-layout" data-aos="fade-up">
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
          <h2 className="section-title" data-aos="fade-up">
            top categories
          </h2>

          <p className="section-info" data-aos="fade-up">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="categorie-layout" data-aos="fade-up">
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
          <h1 className="section-title" data-aos="fade-up">
            our most popular courses
          </h1>

          <p className="section-info" data-aos="fade-up">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="popular-layout">
            <NavTap />
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
          <h1 className="section-title" data-aos="fade-up">
            what people say
          </h1>

          <p className="section-info" data-aos="fade-up">
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
              <div className="details-box" data-aos="fade-up">
                <p className="details-number">
                  380,000+
                </p>

                <p className="details-info">
                  students enrolled
                </p>
              </div>

              <div className="details-box" data-aos="fade-up" data-aos-delay="100">
                <p className="details-number">
                  50,000+
                </p>

                <p className="details-info">
                  Total course views
                </p>
              </div>

              <div className="details-box" data-aos="fade-up" data-aos-delay="200">
                <p className="details-number">
                  18,000+
                </p>

                <p className="details-info">
                  Five-star course reviews
                </p>
              </div>

              <div className="details-box" data-aos="fade-up" data-aos-delay="300">
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
              <h1 className="section-title" data-aos="fade-up">
                <span>learn </span> new skills when and where you like.
              </h1>

              <p className="section-info" data-aos="fade-up">
                Use the list below to bring attention to your product’s key differentiator.
              </p>

              <ul className="join-feature" data-aos="fade-up">
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

              <a href="#" className="join-btn" data-aos="fade-up" data-aos-delay="100">
                join now
              </a>
            </div>

            <div className="join-img" data-aos="fade-up">
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
          <h1 className="section-title" data-aos="fade-up">
            why learn with our courses?
          </h1>

          <p className="section-info" data-aos="fade-up">
            Explore thousands of courses from top universities and companies
          </p>

          <div className="learn-layout">
            <LearnCard logo={learning} title={'01. Learn'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
            <LearnCard logo={education} title={'02. Graduate'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
            <LearnCard logo={working} title={'03. Work'} desc={'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.'} />
          </div>
        </div>
      </section>

      <section className="instructors">
        <div className="container">
          <h1 className="instructors-title" data-aos="fade-up">
            Learn from the best instructors
          </h1>

          <div className="instructors-info" data-aos="fade-up">
            <p className='instructors-desc'>
              Explore thousands of courses from top universities and companies
            </p>

            <a href="#" className='instructors-btn'>
              view all instructors
            </a>
          </div>

          <div className="instructors-layout">
            <InstructorCard name='ali tufan' img={instructorImg} job='Web Designer' rate={3.5} student={47} courses={4} />
            <InstructorCard name='ali tufan' img={instructorImg} job='Web Designer' rate={3.5} student={47} courses={4} />
            <InstructorCard name='ali tufan' img={instructorImg} job='Web Designer' rate={3.5} student={47} courses={4} />
            <InstructorCard name='ali tufan' img={instructorImg} job='Web Designer' rate={3.5} student={47} courses={4} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home