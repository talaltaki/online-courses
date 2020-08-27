import React from "react";
import "./Courses.css";

const Courses = (props) => {
  const { image, name, instructor, rating, price } = props.course;

  const handleAddCourses = props.handleAddCourses;

  return (
    <div className="container course-container bg-light shadow-lg rounded-lg">
      <img className="card-img-top p-3" src={image} alt="..." />
      <div className="card-body p-3">
        <h5 className="card-title text-success">{name}</h5>
        <p className="card-text text-secondary">{instructor}</p>
        <p className="card-text text-secondary font-weight-bold">
          {rating}{" "}
          <span role="img" aria-label="">
            ⭐⭐⭐⭐
          </span>
        </p>
        <p className="card-text text-success font-weight-bolder h4">${price}</p>
        <button
          onClick={() => handleAddCourses(props.course)}
          className="btn btn-success mt-2 rounded-pill"
        >
          Enroll now
        </button>
      </div>
    </div>
  );
};

export default Courses;
