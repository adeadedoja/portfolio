import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Top from './top'
import About from './about'
import Projects from './portfolio'
import Footer from './footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faArrowRight, faDownload)

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
