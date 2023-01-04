
import { ApexOptions } from 'apexcharts';
import ReactApexChart from "react-apexcharts";

interface LinealGrafProps {
  temp: any | [{x: number, y: number}];
}

export const LinealGraf = ( props:LinealGrafProps ) => {

    const { temp } = props;

    const series = [
          {
            name: "Temperature",
            data: temp
          }
        ]
    const options: ApexOptions = {
          chart: {
            height: 150,
            toolbar: {
              show: false
            }
          },
          colors: ['#0d9488'],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '10px'
            }
          },
      
          title: {
            text: 'Temperature forecast',
            align: 'center',
            style: {
              fontSize: '20px',
              fontWeight: '700',
              color: '0d9488'
            }
          },
          grid: {
            borderColor: '#e7e7e7',
          },
          
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Farenheit'
            },
            min: 0,
            max: 400
          },
        }
  return (
    <div className='pt-10 md:pt-20'>
        <ReactApexChart options={options} series={series} type="line" height={350} />
    </div> 
  );
};
