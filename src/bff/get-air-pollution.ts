import axios from 'axios';
import { apiKey } from './apiKey';

export const getAirPollution = async (latLon: string) => {

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?${latLon}&appid=${apiKey}`;
    let dataRes: any;
    await axios.get(url)
        .then(data => { dataRes = data})
        .catch((error)=> {
            console.log('data error',error);
            return null
        });

    return dataRes.data.list;
};
