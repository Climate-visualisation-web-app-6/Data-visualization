import React , {useEffect, useState} from 'react'

import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
// chart js
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
  } from 'chart.js'
  import { Pie } from 'react-chartjs-2'
  import zoomPlugin from 'chartjs-plugin-zoom';
  ChartJS.register(
    ArcElement,
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

  function Vnine() {

  const [Vnine, setV9] = useState([{}])
 
  useEffect( ()=>{
    
    
            fetch("/v9")
            .then( response => response.json() )
            .then(
                data => {
                    console.log(data.length)
                    setV9(data)
                }
            )
           
           
  }
  , [] )




  return (
    <div>

<div style={{margin: '12px', marginTop: '60px'}}>
        <Pie
            data={{
               labels: Vnine.map((v, i)=> {
                return  v["Sub-sector"] 
            }),
                datasets: [{
                    label: "hhh",
                    data: Vnine.map((v, i)=> {
                        return  v["Share of global greenhouse gas emissions (%)"] 
                    }),
                    backgroundColor: [
                        'rgb(201,158,133)',

                        'rgb(85,146,184)',

                        'rgb(188,223,60)',

                        'rgb(187,108,44)',

                        'rgb(239,22,90)',

                        'rgb(236,72,180)',

                        'rgb(102,200,167)',

                        'rgb(118,90,167)',

                        'rgb(229,199,234)',

                        'rgb(178,66,18)',

                        'rgb(1,147,229)',

                        'rgb(94,156,239)',

                        'rgb(57,91,73)',

                        'rgb(22,236,133)',

                        'rgb(153,65,201)',

                        'rgb(22,195,158)',

                        'rgb(71,191,18)',

                        'rgb(166,36,143)',

                        'rgb(46,42,205)',

                        'rgb(206,75,22)',

                        'rgb(13,56,8)',

                        'rgb(177,145,211)',

                        'rgb(116,142,108)',

                        'rgb(5,207,96)',

                        'rgb(225,28,155)',

                        'rgb(197,64,121)',

                        'rgb(187,71,240)',

                        'rgb(203,77,141)',

                        'rgb(23,175,79)'
                    ]
                  }]

                }}
                height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                responsive: true,
            }}
                
            
            />
          </div>
        </div>
      )
    }
    
  


export default Vnine