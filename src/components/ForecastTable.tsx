//@ts-nocheck
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface ForecastTableProps {
    weatherData: any;
}
export const ForecastTable = (props: ForecastTableProps) => {
    const { weatherData } = props;
    const [ showMore, setShowMore ] = useState(false);

    const handleClick = (e) => {
        console.log(weatherData[0])
        e.preventDefault();
        setShowMore(!showMore);
    }

  return (
    <>
        <div className={showMore ? 'h-max' : "h-64 overflow-hidden"}>
            <table className="border-collapse border border-slate-200 table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white">Date</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white">Temperature</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white">Humidity</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white">Weather</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white">Wind</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weatherData.map((w:any,i:number) =>{
                            let bg = 'bg-slate-50';
                            if(i%2 === 0) {
                                bg = 'bg-slate-200'
                            }
                            return (
                                <tr className={bg} key={`0000${i}`}>
                                    <td className="border border-slate-200 text-center p-1">{w.dt_txt}</td>
                                    <td className="border border-slate-200 text-center p-1">{w.main.temp}</td>
                                    <td className="border border-slate-200 text-center p-1">{w.main.humidity}</td>
                                    <td className="border border-slate-200 text-center p-1">{w.weather[0].main}</td>
                                    <td className="border border-slate-200 text-center p-1">
                                        Speed: {w.wind.speed}<br/>
                                        Degrees: {w.wind.deg}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
        <div className="flex items-center justify-center bg-slate-200 cursor-pointer p-2 animate-bounce" onClick={(e) => handleClick(e)}>
            { showMore ? <FontAwesomeIcon icon={faChevronUp} size='xl' flip="horizontal" color="black"/> : <FontAwesomeIcon icon={faChevronDown} size='xl' flip="horizontal" color="black"/> }
        </div>
    </>
  );
};
