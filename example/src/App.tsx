import React, { useEffect } from 'react'
import RNSAK, { Counter } from 'rn-sak'

const App = () => {
  useEffect(() => {
    console.log(RNSAK)
  })

  return <Counter />
}

export default App
