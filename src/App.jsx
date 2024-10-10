import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ShowWeather from './Pages/ShowWeather'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<ShowWeather />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </>
  )
}

export default App
