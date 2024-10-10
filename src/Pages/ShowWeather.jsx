import React, { useState } from 'react'
import Header from '../components/Header'
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function ShowWeather() {

    const [weatherDetails,setWeatherDetails]=useState({
        cityName:"",temp:"",weatherDescp:"",weatherIcon:""
    })

    return (
        // container div
        <div className='homeContainer pb-4'>
            {/* blur div */}
            {/* header */}
            <Header />

            <div className='d-flex justify-content-center'>
                {/* weather details box */}
                <div className='weatherBox'>
                    {/* grid division into 2 col*/}
                    <Grid container spacing={2} >
                        <Grid size={12} className="d-flex justify-content-center">
                            {/* search box */}
                            <div className='searchDiv'>
                                <TextField label="Enter Location" id="outlined-start-adornment" sx={{ m: 1, width: '47ch' }} slotProps={{ input: { startAdornment: <InputAdornment position="start"><i class="text-white fa-lg fa-solid fa-location-dot"></i></InputAdornment>, }, }} />
                            </div>
                            <button className='btn btn-primary searchBttn'><i class="fa-solid fa-magnifying-glass fa-sm"></i> Search</button>
                        </Grid>
                        <Grid size={12} sx={{ paddingTop: "7px" }}>
                            {/* grid division into four */}

                            {/* city name */}
                            <Grid size={12}>
                                <h1 className='fw-semibold'><i class="text-white fa-2xs fa-solid fa-location-dot"></i> Ernakulam</h1>
                            </Grid>

                            {/* temp details */}
                            <Grid size={12} className="d-flex justify-content-center align-items-center mt-5">
                                <h1 className='tempValue'>10&deg;C </h1>
                                <img className='weatherIcon' src="https://openweathermap.org/img/wn/10d@2x.png" alt="Icon" />
                            </Grid>

                            {/* description */}
                            <Grid size={12} className="d-flex justify-content-center align-items-center">
                                <p className='weatherDescp'>overcast clouds</p>
                            </Grid>

                            {/* 5days weather box */}
                            <Grid size={12} className="dayContainer">
                                {/* division into 4 box */}

                                <Grid container spacing={2}>
                                    <Grid size={3} className="dayBox d-flex flex-column align-items-center">
                                        <p>10-10-2024</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <p className='boxTemp'>10&deg;C </p>
                                            <img className='boxImg' src="https://openweathermap.org/img/wn/10d@2x.png" alt="Icon" />
                                        </div>
                                        <p>overcast clouds</p>
                                    </Grid>

                                    <Grid size={3} className="dayBox d-flex flex-column align-items-center">
                                        <p>10-10-2024</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <p className='boxTemp'>10&deg;C </p>
                                            <img className='boxImg' src="https://openweathermap.org/img/wn/10d@2x.png" alt="Icon" />
                                        </div>
                                        <p>overcast clouds</p>
                                    </Grid>

                                    <Grid size={3} className="dayBox d-flex flex-column align-items-center">
                                        <p>10-10-2024</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <p className='boxTemp'>10&deg;C </p>
                                            <img className='boxImg' src="https://openweathermap.org/img/wn/10d@2x.png" alt="Icon" />
                                        </div>
                                        <p>overcast clouds</p>
                                    </Grid>

                                    <Grid size={3} className="dayBox d-flex flex-column align-items-center">
                                        <p>10-10-2024</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <p className='boxTemp'>10&deg;C </p>
                                            <img className='boxImg' src="https://openweathermap.org/img/wn/10d@2x.png" alt="Icon" />
                                        </div>
                                        <p>overcast clouds</p>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    )
}

export default ShowWeather
