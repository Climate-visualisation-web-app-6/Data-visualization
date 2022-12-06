import React, {useEffect, useState} from 'react'
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

function MonthlyData({name, type}) {

    const [apiMonthlyData, setApiMonthlyData] = useState([{}])

    useEffect( ()=>{

      fetch("/"+type)
        .then( response => response.json() )
        .then(
            data => {
                setApiMonthlyData(data)
            }
        )

    }, [])

  return (
    <div>
        <div style={{margin: '12px', marginTop: '60px'}}>
        <Line
            data={{
                labels: apiMonthlyData.map(v => v['Time']),
                datasets: [
                    {
                        label: name,
                        data: apiMonthlyData.map(v=> v["Anomaly (deg C)"]),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                      }
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

export default MonthlyData