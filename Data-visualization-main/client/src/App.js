import React from 'react'
import Vone from './components/Vone'
import Vthree from './components/Vthree'
import Vfive from './components/Vfive'
import Vsix from './components/Vsix'
function App() {

  return (
    <div>
      <h1>V1 and V2 visualization </h1>
      <Vone/>
      <h1>V3 and V4 visualization </h1>
      <Vthree/>
      <h1>V5 visualization </h1>
      <Vfive/>
      <h1>V6 visualization </h1>
      <Vsix/>
    </div> 
  )
}

export default App