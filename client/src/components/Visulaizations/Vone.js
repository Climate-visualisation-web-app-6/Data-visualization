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
  const [vtwoTemp, setVtwoTemp] = useState([{}])

    useEffect( ()=>{

            fetch("/vone_annual")
            .then( response => response.json() )
            .then(
                data => {
                  data.map((v,i)=>{
                    data[i]['timeInAnnual'] = data[i]["timeInAnnual"]+"-01-01"
                  })
                  setVoneAnnual(data)
                }
            )

            fetch("/vone_monthly")
            .then( response => response.json() )
            .then(
                data => {
                  data.map((v,i)=>{
                    data[i]['timeInMonths'] = data[i]["timeInMonths"]+"-01"
                  })
                    setVoneMonthly(data)
                }
            )

            fetch("/v2_temp")
            .then( response => response.json() )
            .then(
                data => {
                  data.map((v,i)=>{

                    if(data[i]['time'] != null){
                      if( data[i]['time'].length == 1 ){
                        data[i]['time'] = "000"+data[i]['time']
                      }
                      else if(data[i]['time'].length == 2){
                        data[i]['time'] = "00"+data[i]['time']
                      }
                      else if(data[i]['time'].length == 3){
                        data[i]['time'] = "0"+data[i]['time']
                      }
  
                      data[i]['time'] = data[i]["time"]+"-01-01"
                    }
                    
                  })
                  setVtwoTemp(data)
                  // console.log(vtwoTemp)
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

                    // V 2 temperature
                    {
                      data: vtwoTemp.map((v, i)=> {
                          return {x: v['time'], y: v["temperature"]}
                      }),
                      label: "V two temp",
                      borderColor: 'rgb(6, 82, 255)',
                      backgroundColor: 'rgba(6, 82, 255, 0.5)',
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
                      unit: "year",
                      // tooltipFormat: "yyyy/mm/dd",
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