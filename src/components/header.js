import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/">{siteTitle}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">

    </div>
  </nav>
)

export default Header
