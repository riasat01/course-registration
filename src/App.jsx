import { useState } from 'react'
import './App.css'
import Cart from './component/cart/Cart'
import Courses from './component/courses/Courses'

function App() {
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [Price, setPrice] = useState(0);
  const [courseNames, setCourseNames] = useState([]);
  const [iD, setID] = useState([]);
  const handleSelect = (price, credit_hour, title, id) => {

    // console.log(iD.includes(id), credit_hour <= remainingCreditHour, credit_hour, remainingCreditHour, totalCreditHour);

    if (iD.includes(id) === false && credit_hour <= remainingCreditHour) {
      setRemainingCreditHour(remainingCreditHour - credit_hour);
      setTotalCreditHour(totalCreditHour + credit_hour);
      setPrice(Price + price)
      const newNames = [...courseNames, title];
      setCourseNames(newNames);
      const newiDs = [...iD, id];
      setID(newiDs);
    }
  }

  return (
    <>
      <h1>Course Registration</h1>
      <main className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <Courses
        handleSelect={handleSelect}
        ></Courses>

        <Cart
          remainingCreditHour={remainingCreditHour}
          Price={Price}
          totalCreditHour={totalCreditHour}
          courseNames = {courseNames}
        ></Cart>
      </main>
    </>
  )
}

export default App
