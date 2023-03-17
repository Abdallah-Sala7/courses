import "./style.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <section className="auth">
      <div className="container">
        <div className="auth-btns">
          <Link
            to={"login"}
            className={`login-btn ${location !== "register" && "active"}`}
          >
            login
          </Link>

          <Link
            to={"register"}
            className={`login-btn ${location === "register" && "active"}`}
          >
            register
          </Link>
        </div>

        <div className="auth-layout">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
