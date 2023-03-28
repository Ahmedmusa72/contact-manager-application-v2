import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      {/* start login component */}
      <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">Login</div>


            <div className="signup-form-row">
              <input type="email" placeholder="example@emal.com" />
            </div>

            <div className="signup-form-row">
              <input type="password" placeholder="password" />
            </div>

            

            <div className="signup-form-row">
              <button>Login</button>
            </div>

            <div className="signup-form-row">
              <i>
                Don't have an account? &nbsp;
                <Link to="/signup">Create Account here</Link>
              </i>
            </div>
          </div>
        </form>
      </div>
      {/* end login component */}
      <Footer />
    </React.Fragment>
  );
};

export default Login;
