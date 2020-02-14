import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Project from './components/Project'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' component={Projects} />
      <Route exact path='/:id' component={Project} />
    </div>
  )
}

export default App
