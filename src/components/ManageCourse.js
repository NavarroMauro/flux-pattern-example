/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import cogoToast from "cogo-toast";

const ManageCourse = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      cogoToast.success("The new course data have been saved!");
    });
  }

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <Prompt whe={true} message="Are you sure you want to leave" /> */}
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCourse;
