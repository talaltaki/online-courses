import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faMedal,
  faInfinity,
  faUserClock,
  faSchool,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../../images/learn.png";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-12 col-md-6 pt-md-5 pt-5">
          <h1>
            <span className="text-success" style={{ fontSize: "100px" }}>
              Learn
            </span>{" "}
            <span className="text-secondary font-weight-light">With</span>
          </h1>
          <h1>
            <span className="text-success" style={{ fontSize: "100px" }}>
              Fun
            </span>
          </h1>
          <div className="mt-md-5">
            <button
              className="btn btn-outline-success btn-lg rounded-pill font-weight-light mr-3"
              type="submit"
            >
              Log in
            </button>
            <button
              className="btn btn-success btn-lg rounded-pill font-weight-light"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 pt-md-5">
          <img className="img-fluid w-100" src={banner} alt="" />
        </div>
      </div>

      <div className="row p-3 bg-white text-dark font-weight-bold">
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon
              className="mr-3"
              icon={faChalkboardTeacher}
            ></FontAwesomeIcon>
            15 Online Courses
          </h5>
          <p className="font-weight-light">Enjoy a variety of fresh topics</p>
        </div>
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon className="mr-3" icon={faMedal}></FontAwesomeIcon>
            Expert Instruction
          </h5>
          <p className="font-weight-light">Find the right instructor for you</p>
        </div>
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon
              className="mr-3"
              icon={faInfinity}
            ></FontAwesomeIcon>
            Lifetime Access
          </h5>
          <p className="font-weight-light">Learn on your schedule</p>
        </div>
      </div>
      <div className="row p-3 bg-white text-dark font-weight-bold">
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon
              className="mr-3"
              icon={faUserClock}
            ></FontAwesomeIcon>
            Go at your own pace
          </h5>
          <p className="font-weight-light">Enjoy lifetime access to courses</p>
        </div>
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon className="mr-3" icon={faSchool}></FontAwesomeIcon>
            Learn from industry experts
          </h5>
          <p className="font-weight-light">
            Select from top instructors around the world
          </p>
        </div>
        <div className="col-md-4 col-4 pt-5">
          <h5 className="text-success">
            <FontAwesomeIcon
              className="mr-3"
              icon={faPhotoVideo}
            ></FontAwesomeIcon>
            Find video courses on almost any topic
          </h5>
          <p className="font-weight-light">
            Build your library for your career and personal growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
