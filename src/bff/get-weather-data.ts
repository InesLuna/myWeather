import axios from 'axios';

export const getWeatherData = async (latLon: string) => {

    const url = `http://api.openweathermap.org/data/2.5/forecast?${latLon}&appid=5cc70887c352d9176a2326b7cf0a2554`;
    let dataRes: any;
    await axios.get(url)
        .then(data => dataRes = data)
        .catch((error)=> {
            console.log('data error');
            return null
        });
    return dataRes;
};