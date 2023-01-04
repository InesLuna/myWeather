import { NavBar, HeaderSection, Table, BarTemperatureGraf, LinealGraf, ForecastTable, PieAirPollution  } from "./components";
import { getWeatherData, getLatLon, fakeData, getAirPollution } from "./bff";
import { useEffect, useState } from "react";

function App() {

    const [ location, setLocation ] = useState('Barcelona')
    const [ weatherData, setWeatherData ] = useState(fakeData);
    const [ airPollutionData, setAirPollutionData ] = useState([]);
    const [ maxTempArray, setMaxTempArray ] = useState([]);
    const [ minTempArray, setMinTempArray ] = useState([]);
    const [ feelsLikeTempArray, setFeelsLikeTempArray ] = useState([]);
    const [ temperature, setTemperature ] = useState([]);
    const [ actualWeather, setActualWeather ] = useState([]);
        
    const dataLocationRequest = async () => {
        const data = await getLatLon(location);
        if(data) {
            dataWeatherAndAirRequest(data);
        }
    } 

  const dataWeatherAndAirRequest = async (latLon: string) => {
      const data = await getWeatherData(latLon);
      const airData = await getAirPollution(latLon);
      if(data) {
          setWeatherData(data);
      }
      if(airData) {
        setAirPollutionData(airData);
      }
  } 
  
  const handleClick = (e:any) => {
    e.preventDefault();
    dataLocationRequest()
  }
  useEffect(()=> {
    dataLocationRequest();
  }, []);

  useEffect(()=> {
    const max: any = [];
    const min: any = [];
    const feels: any = [];
    const temp:  any = [];
    const actual: any = {
      temp: weatherData[0].main.temp,
      humidity: weatherData[0].main.humidity,
      weather: weatherData[0].weather[0].main,
      weatherDescription: weatherData[0].weather[0].description,
      windSpeed: weatherData[0].wind.speed,
      windDegree: weatherData[0].wind.deg
    }
    ;

    weatherData.map((w: any, i:number) => {
      const dt = Date.parse(w.dt_txt);
      
      max.push({x: dt, y: w.main.temp_max});
      min.push({x: dt, y: w.main.temp_min});
      feels.push({x: dt, y: w.main.feels_like});
      temp.push({x: dt, y: w.main.temp});
    })

    setMaxTempArray(max);
    setMinTempArray(min);
    setFeelsLikeTempArray(feels);
    setTemperature(temp);
    setActualWeather(actual);
  }, [weatherData]);

  return (
    <div className="">
      <NavBar setLocation={setLocation} handleClick={handleClick} />
      {
        feelsLikeTempArray.length > 0 ? (
          <div className="p-6 md:p-20">
            <HeaderSection location= {location} date={weatherData[0].dt_txt} />
            <Table  weatherData={actualWeather} />
            <LinealGraf temp={temperature} />
            <ForecastTable weatherData={weatherData}/>
            <div className="flex flex-wrap md:flex-nowrap pt-10 md:p-20">
              <div className='md:w-1/2'>
                <BarTemperatureGraf max={maxTempArray} min={minTempArray} feelLike={feelsLikeTempArray}/>
              </div>
              <div className='md:w-1/2'>
                <PieAirPollution airPollutionData={airPollutionData} />
              </div>
            </div>
          </div> 
          ) : null
      }
    </div>
  );
}

export default App;
