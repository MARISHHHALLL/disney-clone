import React, { useEffect, useState } from 'react'
import './App.css'
import HeaderPage from './HeaderPage/HeaderPage'
import MainIndex from './mainSection/MainIndex'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detail from './details/Detail'
import Login from './login/Login'
import { moviesList } from './features/movies/movieSlice'
import { useDispatch } from 'react-redux'
import db from './firebase'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    db.collection('movies').onSnapshot((spanshot) => {
      let tempmovies = spanshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(moviesList(tempmovies))
    })
  }, [])
  return (
    <div className='App'>
      <Router>
        <HeaderPage />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail/:id'>
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
