import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ShowWeather from './Pages/ShowWeather'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<ShowWeather />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
