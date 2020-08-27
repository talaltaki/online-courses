import React from "react";
import learner from "../../images/learner.png";
import instructor from "../../images/instructor.png";

const Footer = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="col-md-6 pt-5">
          <img className="img-fluid w-100" src={learner} alt="" />
        </div>
        <div className="text-left bg-light rounded-pill shadow-lg p-5 col-md-6">
          <h1 className="text-success">Become a Learner</h1>
          <p className="font-weight-light">
            Hundreds of students are taking different courses everyday and
            getting an excellent education
          </p>
          <button className="btn btn-success rounded-pill">
            Start Learning Today
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="text-right bg-light rounded-pill shadow-lg p-5 col-md-6">
          <h1 className="text-success">Become an Instructor</h1>
          <p className="font-weight-light">
            Top instructors from around the country teach hundreds of students
            on E-Learn and we provide the tools and skills to teach what you
            love
          </p>
          <button className="btn btn-success rounded-pill">
            Start Teaching Today
          </button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid w-100" src={instructor} alt="" />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-center align-items-center p-5 text-left text-success">
        <div className="col-md-3">
          <ul className="list-unstyled">
            <li>Learn on E-Learn</li>
            <li>Teach on E-Learn</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled">
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled">
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Featured Courses</li>
          </ul>
        </div>
        <div className="col-md-3">
          <p>E-Learn © 2020</p>
        </div>
      </div>

      <footer>
        <small className="pb-3">
          Made with{" "}
          <span role="img" aria-label="">
            ❤️
          </span>{" "}
          by Talal Taki
        </small>
      </footer>
    </div>
  );
};

export default Footer;
