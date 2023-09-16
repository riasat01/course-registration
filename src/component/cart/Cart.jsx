import PropTypes from 'prop-types';

const Cart = ({remainingCreditHour, totalCreditHour, Price, courseNames} ) => {
    return (
        <div className='md:col-span-3 lg:col-span-1 h-fit bg-white shadow-lg rounded-lg p-6 space-y-4'>
            <h3 className="text-blue-500 text-lg font-bold leading-8 border-b-2 pb-4">Credit Hour Remaining {remainingCreditHour} hr</h3>
            <h3 className="text-gray-900 text-lg font-bold">Course Name</h3>
            <ol>
                {
                    courseNames.map((courseName, i) => <li key={i}>{courseName}</li>)
                }
            </ol>
            <p className="text-gray-900 text-opacity-80 border-y-2 py-4">Total Credit Hour : {totalCreditHour}</p>
            <p className="text-gray-900 text-opacity-80 font-semibold">Total Price : {Price} USD</p>
        </div>
    );
};

Cart.propTypes = {
    remainingCreditHour: PropTypes.number,
    totalCreditHour: PropTypes.number,
    Price: PropTypes.number,
    courseNames: PropTypes.array
}

export default Cart;