import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const apiContext = createContext()
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContextAPI({ children }) {
    const [weatherDetails, setWeatherDetails] = useState(null)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    // api call
    const fetchWeatherData = async (cityName) => {
        setLoading(true);
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=f920df0f4221d39f2977f1212a4596ad&units=metric`)
            if (result.status == 200) {
                setWeatherDetails(result.data)
                // console.log(result.data);
                navigate('/weather')
                localStorage.setItem("recentWeather",JSON.stringify(result.data))
            } else {
                toast.error(result.response.data.message)
                console.log(result);
                setWeatherDetails(null)
            }
        } catch (error) {
            toast.warning(error.response.data.message)
            console.log(error);
            setWeatherDetails(null)
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <apiContext.Provider value={{ weatherDetails, loading, fetchWeatherData }}>
            {children}
        </apiContext.Provider>
    )
}

export default ContextAPI
