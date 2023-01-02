import { getWeatherData, getLatLon } from "../bff";
import { useEffect, useState } from "react";

export const Table = () => {
    const [ weatherData, setWeatherData ] = useState(null);
    
    const dataLocationRequest = async () => {
        const data = await getLatLon('Barcelona');
        if(data) {
            dataWeatherRequest(data);
        }
    } 

    const dataWeatherRequest = async (latLon: string) => {
        const data = await getWeatherData(latLon);
        if(data) {
            setWeatherData(data);
        }
    } 
    
    useEffect(()=> {
        dataLocationRequest();
    }, []);

    useEffect(()=> {
        console.log(weatherData);
    }, [weatherData]);

    return (
        <div>Table</div>
    );
};
