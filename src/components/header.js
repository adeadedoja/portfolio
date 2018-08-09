import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <Link to="/">{siteTitle}</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">

    </div>
  </nav>
)

export default Header
