import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const addedCourses = props.addedCourses;
  const totalPrice = addedCourses.reduce(
    (totalPrice, course) => totalPrice + course.price,
    0
  );

  return (
    <div className="bg-light">
      <nav className="navbar fixed-top navbar-light bg-light">
        <a
          className="h1 text-decoration-none text-success font-weight-bold"
          href="/home"
        >
          E-Learn
        </a>

        <div>
          <a
            href="/categories"
            className="text-decoration-none text-success mr-4"
          >
            Categories
          </a>
          <a href="/learn" className="text-decoration-none text-success mr-4">
            Learn at E-Learn
          </a>
          <a href="/teach" className="text-decoration-none text-success mr-5">
            Teach on E-Learn
          </a>

          <button
            className="btn btn-success btn-lg rounded-pill mr-3"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Enrolled Courses"
          >
            <FontAwesomeIcon
              className="text-light"
              icon={faShoppingCart}
            ></FontAwesomeIcon>
            <span className="text-light font-weight-bold">
              {" "}
              {addedCourses.length}
            </span>
          </button>
          <button
            className="btn btn-success btn-lg rounded-pill"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Total Price"
          >
            <FontAwesomeIcon
              className="text-light"
              icon={faHandHoldingUsd}
            ></FontAwesomeIcon>
            <span className="text-light font-weight-bold">
              {" "}
              ${totalPrice.toFixed(2)}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
