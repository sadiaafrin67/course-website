import PropTypes from "prop-types";



const Cart = ({ selectedCourse, remainingCredit, totalCredit, totalPrice}) => {
    
    console.log(selectedCourse)
    console.log(remainingCredit)
    console.log(totalCredit)
    console.log(totalPrice)

    return (
        <div className="bg-[#FFFFFF] border p-6">
            <h2 className="text-lg font-bold mb-5 text-[#2F80ED]">Credit Hour Remaining: {remainingCredit} hr</h2>
            <hr />
            <h4 className="text-lg font-bold mt-3 mb-5">Course Name</h4>
            {
                selectedCourse.map(course => (
                    
                    <li className="list-decimal text-sm font-normal mb-2 text-gray-600" key={course.id}>{course.course_name
                    }</li>
                ))
            }
            <hr className="mt-5" />
            <h4 className="text-sm font-semibold mt-3 mb-5">Total Credit Hour:{totalCredit} hr</h4>
            <hr />
            <h4 className="text-sm font-bold mt-3 mb-5">Total Price:{totalPrice} USD</h4>
        </div>
    );
};
Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}
export default Cart;