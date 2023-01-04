import axios from 'axios';
import { apiKey } from './apiKey';

export const getLatLon = async (country: string) => {

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${apiKey}`;
    let lat: any;
    let lon: any;
    await axios.get(url)
        .then(data =>{
            lat = data.data[0].lat;
            lon = data.data[0].lon;
        })
        .catch((error)=> {
            console.log('data error');
            return null
        });

    return `lat=${lat}&lon=${lon}`;
};
