import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { apiContext } from '../context/ContextAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

    const [cityName, setCityName] = useState("")
    const [weatherData, setWeatherData] = useState(null)

    const { fetchWeatherData, weatherDetails } = useContext(apiContext)

    useEffect(() => {
        setWeatherData(JSON.parse(localStorage.getItem("recentWeather")))
    }, [weatherDetails])

    const handleSubmit = () => {
        if (cityName.trim()) {
            fetchWeatherData(cityName)
        }else{
            toast.warning("Please enter the location")
        }
    }

    // console.log(weatherData);


    return (
        // container div
        <div className='homeContainer'>
            {/* blur div */}
            <div className='homeContainerBlur pb-4'>
                {/* header */}
                <Header />

                <div className='d-flex justify-content-center align-items-center w-100' style={{ minHeight: "70vh" }}>

                    {/* grid division into 2 col*/}
                    <Grid container spacing={2} >
                        <Grid size={12} className="d-flex justify-content-center">
                            {/* search box */}
                            <div className='searchDiv' style={{width:"60%"}}>
                                <TextField onChange={(e) => setCityName(e.target.value)} label="Enter Location" id="outlined-start-adornment" sx={{ m: 1, width: '96%' }} slotProps={{ input: { startAdornment: <InputAdornment position="start"><i className="text-white fa-lg fa-solid fa-location-dot"></i></InputAdornment>, }, }} />
                            </div>
                            <button onClick={handleSubmit} className='btn btn-primary searchBttn'><i className="fa-solid fa-magnifying-glass fa-sm"></i> Search</button>
                        </Grid>
                        <Grid size={12} class="d-flex justify-content-center align-items-center w-100">
                            {weatherData &&
                                <div className='recentBox'>
                                    <Grid size={12} sx={{ paddingTop: "7px" }}>
                                        {/* grid division into four */}

                                        {/* city name */}
                                        <Grid size={12}>
                                            <h1 className='fw-semibold'><i class="text-white fa-2xs fa-solid fa-location-dot"></i> {weatherData?.city?.name}</h1>
                                        </Grid>

                                        {/* temp details */}
                                        <Grid size={12} className="d-flex justify-content-center align-items-center mt-5">
                                            <h1 className='tempValue'>{Math.floor(weatherData?.list[0]?.main?.temp)}&deg;C </h1>
                                            <img className='weatherIcon' src={`https://openweathermap.org/img/wn/${weatherData?.list[0]?.weather[0]?.icon}@2x.png`} alt="Icon" />
                                        </Grid>

                                        {/* description */}
                                        <Grid size={12} className="d-flex justify-content-center align-items-center">
                                            <p className='weatherDescp'>{weatherData?.list[0]?.weather[0]?.description}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                        </Grid>
                    </Grid>

                </div>


            </div>
        </div>
    )
}

export default Home