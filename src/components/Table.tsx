

interface TableProps {
    weatherData: any;
}
export const Table = (props: TableProps) => {
   
    const { weatherData } = props;

    return (
        <div className="w-full">
            <div className='py-5'>
                <p className="text-xl text-gray-900">Current <span className="text-yellow-500">W</span><span className="text-red-400">e</span><span className="text-teal-600">a</span>ther:{' '}<span className="capitalize font-bold ">{weatherData.weatherDescription}</span></p>
            </div>
            <table className="border-collapse border border-slate-400 table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center p-3">Temperature</th>
                        <th className="border border-slate-300 text-center p-3">Humidity</th>
                        <th className="border border-slate-300 text-center p-3">Weather</th>
                        <th className="border border-slate-300 text-center p-3">Wind</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300 text-center p-3">{weatherData.temp}</td>
                        <td className="border border-slate-300 text-center p-3">{weatherData.humidity}</td>
                        <td className="border border-slate-300 text-center p-3">{weatherData.weather}</td>
                        <td className="border border-slate-300 text-center p-3">
                            Speed: {weatherData.windSpeed}<br/>
                            Degrees: {weatherData.windDegree}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
