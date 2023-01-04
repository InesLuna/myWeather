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
        <div className={showMore ? 'h-max mt-10 md:mt-20  md:overflow-x-auto snap-x md:snap-none overflow-x-scroll' : "h-64 overflow-y-hidden mt-10 md:mt-20 overflow-x-scroll md:overflow-x-auto snap-x md:snap-none"}>
            <table className="border-collapse border border-slate-200 table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white text-xs md:text-base">Date</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white text-xs md:text-base">Temperature</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white text-xs md:text-base">Humidity</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white text-xs md:text-base">Weather</th>
                        <th className="border border-slate-200 text-center p-3 bg-teal-900 text-white text-xs md:text-base">Wind</th>
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
                                    <td className="border border-slate-200 text-center p-1 text-xs md:text-base">{w.dt_txt}</td>
                                    <td className="border border-slate-200 text-center p-1 text-xs md:text-base">{w.main.temp}</td>
                                    <td className="border border-slate-200 text-center p-1 text-xs md:text-base">{w.main.humidity}</td>
                                    <td className="border border-slate-200 text-center p-1 text-xs md:text-base">{w.weather[0].main}</td>
                                    <td className="border border-slate-200 text-center p-1 text-xs md:text-base">
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
        <div className="flex items-center justify-center bg-slate-200 cursor-pointer p-2 " onClick={(e) => handleClick(e)}>
            { showMore ? <div className="animate-bounce pt-2"><FontAwesomeIcon icon={faChevronUp} size='xl' flip="horizontal" color="black"/> </div> : <div className="animate-bounce pt-2"><FontAwesomeIcon icon={faChevronDown} size='xl' flip="horizontal" color="black"/></div> }
        </div>
    </>
  );
};
