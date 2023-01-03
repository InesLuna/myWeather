import axios from 'axios';

export const getAirPollution = async (latLon: string) => {

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?${latLon}&appid=5cc70887c352d9176a2326b7cf0a2554`;
    let dataRes: any;
    await axios.get(url)
        .then(data => { dataRes = data})
        .catch((error)=> {
            console.log('data error',error);
            return null
        });

    return dataRes.data.list;
};
