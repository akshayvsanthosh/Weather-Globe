import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { apiContext } from '../context/ContextAPI';
import errorImg from '../assets/error.png'
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShowWeather() {
    const [cityName, setCityName] = useState("")
    const [dailyWeather, setDailyWeather] = useState([]);

    const { weatherDetails, loading, fetchWeatherData } = useContext(apiContext)

    useEffect(() => {
        formateWeather()
    }, [weatherDetails])

    // search
    const handleSubmit = () => {
        if (cityName.trim()) {
            fetchWeatherData(cityName)
        }else{
            toast.warning("Please enter the location")
        }
    }

    // formating data for 5day data
    const formateWeather = () => {
        if (!weatherDetails) {
            return
        }
        const weatherDaysData = {}
        weatherDetails?.list?.forEach((data) => {
            const date = new Date(data.dt_txt).toLocaleDateString("en-GB")
            const time = new Date(data.dt_txt).getHours();

            if (!weatherDaysData[date] && time == 12) {
                weatherDaysData[date] = {
                    date,
                    temp: Math.floor(data.main.temp),
                    icon: data.weather[0].icon,
                    description: data.weather[0].description
                }
            }
        });
        setDailyWeather(Object.values(weatherDaysData));
    }
    // console.log(dailyWeather);

    return (
        // container div
        <div className='homeContainer pb-4'>
            {/* header */}
            <Header />

            <div className='d-flex justify-content-center'>
                {/* weather details box */}
                <div className='weatherBox'>
                    {/* grid division into 2 col*/}
                    <Grid container spacing={2} >
                        <Grid size={12} className="d-flex justify-content-center">
                            {/* search box */}
                            <div className='searchDiv w-100 '>
                                <TextField onChange={(e) => setCityName(e.target.value)} className='searchBoxWeather' label="Enter Location" id="outlined-start-adornment" sx={{ m: 1, width:"97%" }} slotProps={{ input: { startAdornment: <InputAdornment position="start"><i className="text-white fa-lg fa-solid fa-location-dot"></i></InputAdornment>, }, }} />
                            </div>
                            <button onClick={handleSubmit} className='btn btn-primary searchBttn'><i className="fa-solid fa-magnifying-glass fa-sm"></i> Search</button>
                        </Grid>

                        {/* loading */}
                        {loading ?
                            <div className='d-flex justify-content-center align-items-center w-100 bg-slate-300' style={{ height: "100vh" }}>
                                <svg width={0} height={0}>
                                    <defs>
                                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#e01cd5" />
                                            <stop offset="100%" stopColor="#1CB5E0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgress className='me-2' sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} /> <h5>Loading</h5>
                            </div>
                        : 
                            <>
                                {/* conditional renderring */}
                                {weatherDetails ?
                                    <Grid size={12} sx={{ paddingTop: "7px" }}>
                                        {/* grid division into four */}

                                        {/* city name */}
                                        <Grid size={12}>
                                            <h1 className='fw-semibold'><i class="text-white fa-2xs fa-solid fa-location-dot"></i> {weatherDetails?.city?.name}</h1>
                                        </Grid>

                                        {/* temp details */}
                                        <Grid size={12} className="d-flex justify-content-center align-items-center mt-5">
                                            <h1 className='tempValue'>{Math.floor(weatherDetails?.list[0]?.main?.temp)}&deg;C </h1>
                                            <img className='weatherIcon' src={`https://openweathermap.org/img/wn/${weatherDetails?.list[0]?.weather[0]?.icon}@2x.png`} alt="Icon" />
                                        </Grid>

                                        {/* description */}
                                        <Grid size={12} className="d-flex justify-content-center align-items-center">
                                            <p className='weatherDescp'>{weatherDetails?.list[0]?.weather[0]?.description}</p>
                                        </Grid>

                                        {/* 5days weather box */}
                                        <Grid size={12} className="dayContainer">
                                            {/* division into 4 box */}

                                            <Grid container spacing={2}>
                                                {dailyWeather.length > 0 ?
                                                    dailyWeather.map((day, index) => (
                                                        <Grid key={index + 1} size={{xs:6,sm:3}} className="dayBox d-flex flex-column align-items-center">
                                                            <p>{day?.date}</p>
                                                            <div className='d-flex flex-column justify-content-center align-items-center'
                                                                style={{ backgroundImage: `url("https://openweathermap.org/img/wn/${day?.icon}@2x.png")` }}>
                                                                <p className='boxTemp'>{day.temp}&deg;C </p>
                                                            </div>
                                                            <p>{day.description}</p>
                                                        </Grid>
                                                    ))
                                                    :
                                                    <></>
                                                }
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                    :
                                    // error case
                                    <div className='d-flex flex-column justify-content-center align-items-center w-100 pt-5'>
                                        <img width="375px" src={errorImg} alt="Image" />
                                        <h3>Oops! Location not found!</h3>
                                    </div>
                                }
                            </>
                        }

                    </Grid>
                </div>
            </div>

        </div>
    )
}

export default ShowWeather
