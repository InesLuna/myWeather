import { useEffect } from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from "react-apexcharts";

interface LinealGrafProps {
    max: any | [{x: number, y: number}];
    min: any | [{x: number, y: number}];
    feelLike: any | [{x: number, y: number}];
}

export const BarTemperatureGraf = ( props:LinealGrafProps ) => {

    const { max, min, feelLike } = props;

    const series = [
          {
            name: "Maximum Temperature",
            data: max
          },
          {
            name: "Lowest Temperature",
            data: min
          },
          {
            name: "Feels Like",
            data: feelLike
          }
        ]
    const options: ApexOptions = {
          chart: {
            height: 350,
            toolbar: {
              show: true,
              offsetY: 350,
            }
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
           curve: 'smooth'
          },
          title: {
            text: 'Temperature',
          //  align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            column: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Farenheit'
            },
            min: 270,
            max: 300
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        }
  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};
