import PropTypes from 'prop-types';
import {FiDollarSign} from 'react-icons/fi'
import {BsBook} from 'react-icons/bs'

const Course = ({course}) => {
    const {title, description, price, credit_hour, image} = course;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <div>
                <FiDollarSign></FiDollarSign>
                <p>Pirce : {price}</p>
                </div>
                <div>
                    <BsBook></BsBook>
                    <p>Credit : {credit_hour}hr</p>
                </div>
            </div>
            <button>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;