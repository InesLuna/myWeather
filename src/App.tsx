import { NavBar, HeaderSection, Table, LinealGraf, BarTemperatureGraf  } from "./components";
import { getWeatherData, getLatLon } from "./bff";
import { useEffect, useState } from "react";

function App() {

  const [ weatherData, setWeatherData ] = useState([]);
  const [ maxTempArray, setMaxTempArray ] = useState([]);
  const [ minTempArray, setMinTempArray ] = useState([]);
  const [ feelsLikeTempArray, setFeelsLikeTempArray ] = useState([]);
    
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
    const max: any = [];
    const min: any = [];
    const feels: any = [];

    weatherData.map((w: any, i:number) => {
      const dt = w.dt;

      max.push({x: dt, y: w.main.temp_max});
      min.push({x: dt, y: w.main.temp_min});
      feels.push({x: dt, y: w.main.feels_like});
    })
    setMaxTempArray(max);
    setMinTempArray(min);
    setFeelsLikeTempArray(feels);
  }, [weatherData]);

  return (
    <div className="bg-red">
      <NavBar />
      <HeaderSection location= 'Barcelona' />
      <Table />
      {
        feelsLikeTempArray.length > 0 ? ( <div className='w-1/2 p-5'><BarTemperatureGraf max={maxTempArray} min={minTempArray} feelLike={feelsLikeTempArray}/></div>) : null
      }
	  
    </div>
  );
}

export default App;
