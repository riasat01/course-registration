import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi'
import { BsBook } from 'react-icons/bs'

const Course = ({ course, handleSelect }) => {
    const { title, description, price, credit_hour, image, id } = course;
    return (
        <div className='h-full bg-white shadow-lg rounded-lg p-6 space-y-4'>
            <img className='h-60 w-full rounded-lg' src={image} alt="" />
            <h2 className='text-gray-900 text-lg font-semibold'>{title}</h2>
            <p className='text-gray-700 text-opacity-60 text-sm leading-6'>{description}</p>
            
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center my-3'>
                    <FiDollarSign></FiDollarSign>
                    <p>Price : {price}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <BsBook></BsBook>
                    <p>Credit : {credit_hour}hr</p>
                </div>
            </div>
            <button onClick={() => handleSelect(price, credit_hour, title, id)} className='w-full text-white text-lg font-semibold bg-blue-500 py-2 rounded-lg'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func
}

export default Course;