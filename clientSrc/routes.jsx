import React from 'react'
import { createRoutes, Route } from 'react-router'

import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

const routes = (
  <Route component={ Layout }>
    <Route path='/' component={ Home } />
    <Route path='/resume' component={ Resume } />
    <Route path='/contact' component={ Contact } />
  </Route>
)
export default createRoutes(routes);
