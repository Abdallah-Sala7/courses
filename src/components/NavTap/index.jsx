import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryValue, setProfileTap } from "../../store/reducers/appSlice";

const NavTap = ({ isProfile = false }) => {
  const { category, profileTap } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handelNavTap = (e, tap) => {
    dispatch(setCategoryValue(tap));
    e.preventDefault();
  };

  const handelProfileNav = (e, tap) => {
    dispatch(setProfileTap(tap));
    e.preventDefault();
  };

  return (
    <div className="popular-nav" data-aos="fade-in">
      {isProfile ? (
        <>
          <a
            href="#"
            onClick={(e) => handelProfileNav(e, "all")}
            className={`popular-tap ${profileTap === "all" ? "active" : ""}`}
          >
            all
          </a>

          <a
            href="#"
            onClick={(e) => handelProfileNav(e, "progress")}
            className={`popular-tap ${
              profileTap === "progress" ? "active" : ""
            }`}
          >
            In Progress
          </a>

          <a
            href="#"
            onClick={(e) => handelProfileNav(e, "finished")}
            className={`popular-tap ${
              profileTap === "finished" ? "active" : ""
            }`}
          >
            Finished
          </a>

          <a
            href="#"
            onClick={(e) => handelProfileNav(e, "passed")}
            className={`popular-tap ${profileTap === "passed" ? "active" : ""}`}
          >
            Passed
          </a>
        </>
      ) : (
        <>
          <a
            href="#"
            onClick={(e) => handelNavTap(e, "all")}
            className={`popular-tap ${category === "all" ? "active" : ""}`}
          >
            all
          </a>

          <a
            href="#"
            onClick={(e) => handelNavTap(e, "software")}
            className={`popular-tap ${category === "software" ? "active" : ""}`}
          >
            it & software
          </a>

          <a
            href="#"
            onClick={(e) => handelNavTap(e, "design")}
            className={`popular-tap ${category === "design" ? "active" : ""}`}
          >
            design
          </a>

          <a
            href="#"
            onClick={(e) => handelNavTap(e, "development")}
            className={`popular-tap ${
              category === "development" ? "active" : ""
            }`}
          >
            development
          </a>

          <a
            href="#"
            onClick={(e) => handelNavTap(e, "business")}
            className={`popular-tap ${category === "business" ? "active" : ""}`}
          >
            business
          </a>
        </>
      )}
    </div>
  );
};

export default NavTap;
