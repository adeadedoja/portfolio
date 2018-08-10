import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Top from './top'
import About from './about'
import Projects from './portfolio'

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <About></About>
    <Projects></Projects>
    <h1>dami</h1>
  </Layout>
)

export default IndexPage
