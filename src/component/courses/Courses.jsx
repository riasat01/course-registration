import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;