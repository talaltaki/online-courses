import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import fakeData from "./fakeData";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  const courseList = fakeData;
  const [courses, setCourses] = useState(courseList);

  const [addedCourses, setAddedCourses] = useState([]);
  const handleAddCourses = (course) => {
    const newAddedCourses = [...addedCourses, course];
    setAddedCourses(newAddedCourses);
  };

  return (
    <div className="App">
      <Header addedCourses={addedCourses}></Header>

      <Banner></Banner>

      <h3 className="bg-light shadow-lg text-success p-4">Explore Courses</h3>

      {courses.map((course) => (
        <Courses
          key={course.id}
          course={course}
          handleAddCourses={handleAddCourses}
        ></Courses>
      ))}

      <Footer></Footer>
    </div>
  );
}

export default App;
