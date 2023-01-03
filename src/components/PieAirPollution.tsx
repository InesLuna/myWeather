//@ts-nocheck
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from "react";

 interface PieAirPollutionProps {
    airPollutionData: any;
 }
export const PieAirPollution = (props: PieAirPollutionProps) => {

    const { airPollutionData } = props;
    const [ airComponents, setAirComponents ] = useState([]);

    useEffect(()=>{
        console.log(airPollutionData)
        if(airPollutionData.length > 0) setAirComponents([airPollutionData.co, airPollutionData.no, airPollutionData.no2, airPollutionData.o3, airPollutionData.so2, airPollutionData.pm2_5, airPollutionData.pm10, airPollutionData.nh3])
    },[airPollutionData]);

    const series = airComponents;
    const options: ApexOptions = {
        labels: ['Carbon monoxide', 'Nitrogen monoxide', 'Nitrogen dioxide', 'Ozone', 'Sulphur dioxide', 'Fine particles matter', 'Coarse particulate matter', 'Ammonia']
    };


  return (
    <div>
        <ReactApexChart options={options} series={series} type="pie" />
    </div>
  )
}
