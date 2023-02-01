import './home.css'
import {studentIcon, coursesIcon, learnIcon, homeImgOne, homeImgTow, homeImgThree} from '../../assets/images'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home