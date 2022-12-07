import React from 'react'

import YearlyData from './components/YearlyData';
import MonthlyData from './components/MonthlyData';

function App() {

  return (
    <div>
     
      <YearlyData name="Northen Hemisphere" type="nothernHemisphere" />
      <YearlyData name="Southern Hemisphere" type="southernHemisphere" />
      <MonthlyData name="Southern Hemisphere Monthly" type="southernHemispere_monthly" />
      <MonthlyData name="Northen Hemispare Monthly" type="nHem_Monthly" />
      <MonthlyData name="Global Monthly" type="global_data_monthly" />
    </div>
  )
}

export default App