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
function Vsix() {

const [vsixco2, setVsixCo2] = useState([{}])
const [vsixDatab, setVsixDataB] = useState([{}])

useEffect( ()=>{
fetch("/v6_yearly_a")
.then( response => response.json() )
    .then(
        data => {
            setVsixCo2(data)
        }
)
fetch("/v6_data_b")
.then( response => response.json() )
    .then(
        data => {
            setVsixDataB(data)
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
                        data: vsixco2.map(v => {
                            return {x: v['time'], y: v["CO2Measurement"]}
                        }),
                        
                        label: "CO2 Mesurments a",
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },

                    {
                        data: vsixDatab.map(v => {
                            return {x: v['year'], y: v["co2"]}
                        }),
                        
                        label: "CO2 Mesurments b",
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
                              quarter: ' MM YYYY'
                          },
                          unit: "year",
                      
                      },
                          adapters: { 
                            date: {
                              locale: enUS, 
                            },
                          }, 
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
    
  


export default Vsix