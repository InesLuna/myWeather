import axios from 'axios';

export const getLatLon = async (country: string) => {

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=5cc70887c352d9176a2326b7cf0a2554`;
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
