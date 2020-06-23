
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"

import "./layout.css"
import Navbar from './Globals/Navbar'


const Layout = ({ children }) => 
  <>
    <Navbar />
    {children}
  </>
  



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
