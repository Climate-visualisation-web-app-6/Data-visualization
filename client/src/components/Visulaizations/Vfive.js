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
function Vfive() {

const [vfiveco2, setVfiveCo2] = useState([{}])

useEffect( ()=>{
fetch("/v5_co2")
.then( response => response.json() )
    .then(
        data => {
            setVfiveCo2(data)
        }
)
    }
, [] )

return (
    <div>

<div style={{margin: '12px', marginTop: '60px'}}>
        <Line
            data={{
               
                datasets: [

                    {
                        data: vfiveco2.map(v => {
                            return {x: v['time'], y: v["co2_Measurements"]}
                        }),
                        
                        label: "CO2 Mesurments",
                        borderColor: 'rgb(255, 99, 132)',
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    

                  ]
                }}
                height={300}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  //   scales: {
                  //     x: {
                  //       type: 'time',
                  //       time: {
                  //         displayFormats: {
                  //             quarter: ' MM YYYY'
                  //         },
                  //         unit: "year",
                      
                  //     },
                  //         adapters: { 
                  //           date: {
                  //             locale: enUS, 
                  //           },
                  //         }, 
                  //     }
                  // },
                    plugins: {   
                        
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
    
  


export default Vfive