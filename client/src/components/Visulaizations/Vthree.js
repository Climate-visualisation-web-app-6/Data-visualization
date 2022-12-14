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

  function Vthree() {
  const [vthreeMonthly, setVthreeMonthly] = useState([{}])
  const [vthreeAnnual, setVthreeAnnual] = useState([{}])
  const [vfourA, setVfourA] = useState([{}])
  const [vfourB, setVfourB] = useState([{}])
  const [vfourC, setVfourC] = useState([{}])
  useEffect( ()=>{
    fetch("/v3_monthly")
    .then( response => response.json() )
    .then(
        data => {
            setVthreeMonthly(data)
        }
    )
    fetch("/v3_yearly")
            .then( response => response.json() )
            .then(
                data => {
                    setVthreeAnnual(data)
                }
            )
            fetch("/V4_yearly_a")
            .then( response => response.json() )
            .then(
                data => {
                    setVfourA(data)
                }
            )
            fetch("/V4_yearly_b")
            .then( response => response.json() )
            .then(
                data => {
                    setVfourB(data)
                }
            )
            fetch("/V4_yearly_c")
            .then( response => response.json() )
            .then(
                data => {
                    setVfourC(data)
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
                        data: vthreeMonthly.map(v => {
                            return {x: v['time'], y: v["mean"]}
                        }),
                        
                        label: "Monthly CO2 Mesurments",
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                    {
                      data: vthreeAnnual.map((v, i)=> {
                          return {x: v['time'], y: v["mean"]}
                      }),
                      label: "Annual CO2 Measurments",
                      borderColor: 'rgb(255, 99, 132)',
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                  {
                    data: vfourA.map((v, i)=> {
                        return {x: v['time'], y: v["co2"]}
                    }),
                    label: "V-Four A",
                    borderColor: 'rgb(12, 255, 1)',
                    backgroundColor: 'rgba(12, 255, 1, 0.5)',
                },
                {
                  data: vfourB.map((v, i)=> {
                      return {x: v['time'], y: v["co2"]}
                  }),
                  label: "V-Four B",
                  borderColor: 'rgb(6, 82, 255)',
                  backgroundColor: 'rgba(6, 82, 255, 0.5)',
              },
              {
                data: vfourC.map((v, i)=> {
                    return {x: v['time'], y: v["co2"]}
                }),
                label: "V-Four C",
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
                              quarter: 'DD MM YYYY'
                          },
                          unit: "year",
                        //   tooltipFormat: "yyyy/mm/dd",
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
    
  


export default Vthree