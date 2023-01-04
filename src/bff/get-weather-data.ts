import axios from 'axios';
import { apiKey } from './apiK';

export const getWeatherData = async (latLon: string) => {

    const url = `http://api.openweathermap.org/data/2.5/forecast?${latLon}&appid=${apiKey}`;
    let dataRes: any;
    await axios.get(url)
        .then(data => dataRes = data)
        .catch((error)=> {
            console.log('data error');
            return null
        });
    return dataRes.data.list;
};
