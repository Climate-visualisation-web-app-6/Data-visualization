import React from 'react'
import Vnine from '../Visulaizations/Vnine'
import Vone from '../Visulaizations/Vone'
import Vthree from '../Visulaizations/Vthree'
import Vfive from '../Visulaizations/Vfive'
import Vsix from '../Visulaizations/Vsix'
import Vseven from '../Visulaizations/Vseven'

function Home() {
  return (
    <div>
        <div>
          <h1 style={{textAlign: 'center'}}>V1 & V2</h1>
          <Vone />
        </div>

        <hr></hr>

        <div style={{marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}>V3</h1>
          <Vthree />
        </div>

        <hr></hr>

        <div style={{marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}>V5</h1>
          <Vfive />
        </div>
        
        <hr></hr>

        <div style={{marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}>V6</h1>
          <Vsix />
        </div>
                
        <hr></hr>

        <div style={{marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}>V7</h1>
          <Vseven />
        </div>

        <hr></hr>

        <div style={{marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}>V9</h1>
          <Vnine />
        </div>
        
        
    </div>
  )
}

export default Home