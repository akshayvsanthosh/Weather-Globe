import React from 'react'
import Header from '../components/Header'
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function Home() {
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
                            <div className='searchDiv'>
                                <TextField label="Enter Location" id="outlined-start-adornment" sx={{ m: 1, width: '37ch' }} slotProps={{ input: { startAdornment: <InputAdornment position="start"><i class="text-white fa-lg fa-solid fa-location-dot"></i></InputAdornment>, }, }} />
                            </div>
                            <button className='btn btn-primary searchBttn'><i class="fa-solid fa-magnifying-glass fa-sm"></i> Search</button>
                        </Grid>
                        <Grid size={12} >

                        </Grid>
                    </Grid>

                </div>


            </div>
        </div>
    )
}

export default Home