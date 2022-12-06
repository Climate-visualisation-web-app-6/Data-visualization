import React, {useEffect, useState} from 'react'

import YearlyData from './components/YearlyData';
import MonthlyData from './components/MonthlyData';

function App() {

  return (
    <div>

      <YearlyData name="Northen Hemisphere" type="nothernHemisphere" />
      <YearlyData name="Southern Hemisphere" type="southernHemisphere" />
      <MonthlyData name="Southern Hemisphere Monthly" type="southernHemispere_monthly" />

    </div>
  )
}

export default App