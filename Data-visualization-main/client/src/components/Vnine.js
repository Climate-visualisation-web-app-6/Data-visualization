import React , {useEffect, useState} from 'react'
import 'chartjs-adapter-date-fns';

// chart js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
  ChartJS.register(ArcElement, Tooltip, Legend);

  function Vnine() {

  const [Vnine, setV9] = useState([{}])
 
  useEffect( ()=>{
    
    
            fetch("/v9")
            .then( response => response.json() )
            .then(
                data => {
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
               
                datasets: [{
                    label: 'co2 emmission',
                    data: Vnine.map((v, i)=> {
                        return  v["Share of global greenhouse gas emissions (%)"] 
                    }),
                    backgroundColor: [
                      'rgb(255, 99, 132)',  
                    ],
                    hoverOffset: 4
                  }]

                }}
                
            
            />
          </div>
        </div>
      )
    }
    
  


export default Vnine