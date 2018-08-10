import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Top from './top'
import About from './about'
import Projects from './portfolio'
import Footer from './footer'

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
