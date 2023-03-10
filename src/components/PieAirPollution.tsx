//@ts-nocheck
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from "react";
import { useWindowWidth } from '@react-hook/window-size';

 interface PieAirPollutionProps {
    airPollutionData: any;
 }
export const PieAirPollution = (props: PieAirPollutionProps) => {

    const { airPollutionData } = props;
    const width = useWindowWidth();

    const [ airComponents, setAirComponents ] = useState([]);
    const [ legendPosition, setLegendPosition ] = useState('right');
    const [ airQ, setAirQ ] = useState('');

    useEffect(()=>{
        console.log(airPollutionData)
        if(airPollutionData.length > 0) {
            setAirComponents([airPollutionData[0].components.co, airPollutionData[0].components.no, airPollutionData[0].components.no2, airPollutionData[0].components.o3, airPollutionData[0].components.so2, airPollutionData[0].components.pm2_5, airPollutionData[0].components.pm10, airPollutionData[0].components.nh3]);
            switch(airPollutionData[0].main.aqi){
                case 1: 
                    setAirQ('Good');
                    break;
                case 2: 
                    setAirQ('Fair');
                    break;
                case 3: 
                    setAirQ('Moderate');
                    break;
                case 4: 
                    setAirQ('Poor');
                    break;
                case 5: 
                    setAirQ('Very Poor');
                    break;
                default:
                    setAirQ('Unknown')
            }
        } 
    },[airPollutionData]);

    useEffect(()=>{
        width < 960 ? setLegendPosition('bottom') : setLegendPosition('right');
    }, [width]);

    const series = airComponents;
    const options: ApexOptions = {
        labels: ['Carbon monoxide', 'Nitrogen monoxide', 'Nitrogen dioxide', 'Ozone', 'Sulphur dioxide', 'Fine particles matter', 'Coarse particulate matter', 'Ammonia'],
        legend: {
            position: legendPosition
        }
    };


  return (
    <div className="pt-6 md:pt-0">
        <p className="font-bold text-lg  text-center pb-6 md:pb-10">Air quality:{' '}<span className="text-red-500">{airQ}</span></p>
        <ReactApexChart options={options} series={series} type="pie" height={250} />
    </div>
  )
}
