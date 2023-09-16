import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleSelect }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="md:col-span-3 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                courses.map(course => {
                    return <Course
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}
                    ></Course>
                })
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
}

export default Courses;