import React from 'react'
import './App.css'
import HeaderPage from './HeaderPage/HeaderPage'
import MainIndex from './mainSection/MainIndex'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detail from './details/Detail'
function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderPage />
        <Switch>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/'>
            <MainIndex />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
