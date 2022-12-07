import React , {useEffect, useState} from 'react'
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
// chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
  } from 'chart.js'
  import { Line } from 'react-chartjs-2'
  import zoomPlugin from 'chartjs-plugin-zoom';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
    TimeScale
  )

function Vone() {

  const [voneAnnual, setVoneAnnual] = useState([{}])
  const [voneMonthly, setVoneMonthly] = useState([{}])

    useEffect( ()=>{

            fetch("/v1_yearly")
            .then( response => response.json() )
            .then(
                data => {
                    setVoneAnnual(data)
                }
            )

            fetch("/v1_monthly")
            .then( response => response.json() )
            .then(
                data => {
                    setVoneMonthly(data)
                }
            )

  
      }, [])

  return (
    <div>
        <div style={{margin: '12px', marginTop: '60px'}}>
        <Line
            data={{
                // labels: nHm.map(v => v['Time']),
                datasets: [
                    {
                        data: voneAnnual.map(v => {
                            return {x: v['timeInAnnual'], y: v["globaAnnual"]}
                        }),
                        // data: [
                        //     {x: '2018-01-01', y: '2'},
                        //     {x: '2019-01-01', y: '5'},
                        //     {x: '2020-01-01', y: '8'},
                        // ],
                        label: "Global",
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                    {
                        data: voneAnnual.map((v, i)=> {
                            return {x: v['timeInAnnual'], y: v["southernHemisphereAnnual"]}
                        }),
                        label: "Southern Hemishphere",
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        data: voneAnnual.map((v, i)=> {
                            return {x: v['timeInAnnual'], y: v["northerHemisphereAnnual"]}
                        }),
                        label: "Northen Hemishphere",
                        borderColor: 'rgb(12, 255, 1)',
                        backgroundColor: 'rgba(12, 255, 1, 0.5)',
                    },

                    // Monthly
                    {
                        data: voneMonthly.map((v, i)=> {
                            return {x: v['timeInMonths'], y: v["globalMonthlyAnnual  "]}
                        }),
                        label: "Global Monthly",
                        borderColor: 'rgb(252, 255, 1)',
                        backgroundColor: 'rgba(252, 255, 1, 0.5)',
                    },
                    {
                        data: voneMonthly.map((v, i)=> {
                            return {x: v['timeInMonths'], y: v["southernHemisphereMonthlyAnnual"]}
                        }),
                        label: "Southern Hemishphere Monthly",
                        borderColor: 'rgb(154, 150, 1)',
                        backgroundColor: 'rgba(154, 150, 1, 0.5)',
                    },
                    {
                        data: voneMonthly.map((v, i)=> {
                            return {x: v['timeInMonths'], y: v["northerHemisphereMonthlyAnnual"]}
                        }),
                        label: "Northen Hemishphere Monthly",
                        borderColor: 'rgb(212, 150, 1)',
                        backgroundColor: 'rgba(212, 150, 1, 0.5)',
                    },
                ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      displayFormats: {
                          quarter: 'MMM YYYY'
                      },
                      unit: "month",
                      tooltipFormat: "yyyy/mm/dd",
                  },
                      adapters: { 
                        date: {
                          locale: enUS, 
                        },
                      }, 
                  }
              },
                plugins: {   
                    // tooltip: {
                    //     callbacks: {
                    //       title: function () {
                    //         return "my tittle";
                    //       }
                    //     }
                    //   },
                    zoom: {
                        pan: {
                            enabled: true
                          },
                      zoom: {
                        wheel: {
                          enabled: true,
                        },
                        pinch: {
                          enabled: true
                        },
                        mode: 'x',
                      }
                    }
                  }
            }}
        />
      </div>
    </div>
  )
}

export default Vone