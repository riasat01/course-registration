import './App.css'
import Cart from './component/cart/Cart'
import Courses from './component/courses/Courses'

function App() {


  return (
    <>
      <h1>Course Registration</h1>
      <main className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
