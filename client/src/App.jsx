import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/scss/shorty.scss'

import Redirect from './components/Redirect'
import Home from './views/Home'

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:hash" component={Redirect} exact />
    </Router>
  )
}

export default App
