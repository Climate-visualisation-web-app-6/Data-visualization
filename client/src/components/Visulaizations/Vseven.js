import React , {useEffect, useState} from 'react'
import 'chartjs-adapter-date-fns';
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

function Vseven() {

  const [vsevenco2, setVsevenco2] = useState([{}])
  const [vseventemperature, setVseventemperature] = useState([{}])
  
    useEffect( ()=>{
            fetch("/v7_ppm_a")
            .then( response => response.json() )
            .then(
                data => {
                    setVsevenco2(data)
                }
            )

            fetch("/v7_stc_b")
            .then( response => response.json() )
            .then(
                data => {
                    setVseventemperature(data)
                }
            )
        
      }, [])

  return (
    <div>
        <div style={{margin: '12px', marginTop: '60px'}}>
        <Line
            data={{
               
                datasets: [

                    {
                        data: vsevenco2.map((v, i) => {
                            return {x: v['time'], y: v["Co2"]}
                        }),
                       
                        label: "co2",
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        yAxisID: 'y',
                    },
                    {
                        data: vseventemperature.map((v, i)=> {
                            return {x: v['time'], y: v["temperature"]}
                        }),
                        label: "temperature",
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        yAxisID: 'y1',
                    }
                ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                      },
                      y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                          drawOnChartArea: false,
                        },
                      },

                  x: {
                    type: 'linear',
                    // title: {
                    //     display: true,
                    //     text: 'time in year'
                    // }
                  }
              },
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

export default Vseven