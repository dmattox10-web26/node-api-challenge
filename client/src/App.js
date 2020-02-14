import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Selection from './components/Selection'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' component={Projects} />
      <Route exact path='/:id' component={Selection} />
    </div>
  )
}

export default App
