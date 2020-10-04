import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Main } from './pages/Main'
import { AboutCrew } from './pages/AboutCrew'
import { Download } from './pages/Download'
import { Contacts } from './pages/Contacts'
import { Demo } from './pages/Demo'

function App() {
  return (
    <Router>
      <Navbar />
      {/* for developing purposes only */}
      <Switch>
        <Route path="/" exact> <Main /> </Route>
        <Route path="/crew" exact> <AboutCrew /> </Route>
        <Route path="/download" exact> <Download /> </Route>
        <Route path="/contacts" exact> <Contacts /> </Route>
        <Route path="/demo" exact> <Demo /> </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
