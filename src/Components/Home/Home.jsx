import { useEffect, useState } from "react";
import "./Home.css";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Cart from "../Cart/Cart";
import swal from 'sweetalert';


const Home = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
//   console.log(allCourse);
// console.log(selectedCourse)

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);


  const handleSelectCourse = (course) => {
    const newCourse = [...selectedCourse, course]

    const isExist = selectedCourse.find((item) => item.id == course.id);

    let count = course.credit;
    let price = course.price

    if(isExist) {
      return swal( "Oops!", "This course is already added!", "warning");
    }
    else{

        selectedCourse.forEach((item) => {
            count = count + item.credit
        })

        selectedCourse.forEach((item) => {
            price = price + item.price
        })
        
        const totalRemainingCredit = 20 - count

        if(count > 20) {
            return swal( "Oops!", "You have no credit hour left!", "warning");
        }

        setTotalPrice(price)
        setTotalCredit(count)
        setRemainingCredit(totalRemainingCredit) 
        setSelectedCourse(newCourse);
    }
    
   
  }



  return (
    // whole card container
    <div className="container mx-auto">
      {/* home container */}
      <div className="flex justify-around ">
        {/* card container*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-2/3">
            {/* cards */}
          {allCourse.map((course) => (
            <div key={course.id} className="card">
              <div className="max-w-sm bg-[#FFFFFF] border rounded-lg shadow h-full ">
                <a href="#">
                  <div className="img-div">
                    <img
                      className="rounded-t-lg w-full h-[200px] p-2"
                      src={course.img}
                      alt="img"
                    />
                  </div>
                </a>
                <div className="p-5 ">
                  <a href="#">
                    <h5 className="mb-2 text-sm font-extrabold tracking-tight text-gray-900 ">
                      {course.course_name}
                    </h5>
                  </a>
                  <p className="mb-3 font-medium text-gray-700 ">
                    {course.short_details.slice(0, 70)}...
                  </p>

                  <div className="flex justify-between mb-6">
                    <div className="flex items-center">
                      <button className="mr-2 ">
                        <FaDollarSign />
                      </button>
                      <p className="text-xs font-semibold">
                        Price: {course.price}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button className="mr-2">
                        <FaBookOpen />
                      </button>
                      <p className="text-xs font-medium">
                        Credit: {course.credit}hr
                      </p>
                    </div>
                  </div>

                  <a onClick={() => handleSelectCourse(course)}
                    href="#"
                    className="inline-flex w-full justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-auto"
                  >
                    Select
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cart */}
        <div className="cart ">
          <Cart selectedCourse={selectedCourse} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
