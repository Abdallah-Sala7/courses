import "./style.css";

import { avatar } from "../../assets/images";
import { NavTap, ProfileAside } from "../../components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const { asideTap } = useSelector((state) => state.app);
  return (
    <>
      <header>
        <div className="container">
          <div className="profile-header-contint">
            <div className="profile-img">
              <img src={avatar} alt="profile" loading="lazy" />
            </div>

            <div className="profile-name">
              <h1>{JSON.parse(localStorage.getItem("user"))?.email}</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="profile">
        <div className="container">
          <div className="profile-layout">
            <div className="profile-nav">
              <ProfileAside />
            </div>

            <div className="profile-contint-layout">
              {asideTap === "quizzes" || asideTap === "courses" ? (
                <NavTap isProfile={true} />
              ) : null}

              <div className="profile-contint">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
