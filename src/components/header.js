import {
  Jumbotron
} from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"


import SocialIcons from "./socialicons"

const Header = ({ headerInfo }) => (
  <Jumbotron>
    <h1>{ headerInfo.title }</h1>
    <p>
      Systems and their data, keeping 'em all together.
      <br /> Love to travel to places with lots of sun or lots of snow.
      <br />
      <b>
        Skinnskatteberg {"->"} Gothenburg {"->"} Skövde
      </b>
    </p>
    { headerInfo.socialIcons &&
    <SocialIcons/>
    }
  </Jumbotron>
)

Header.propTypes = {
  headerInfo: PropTypes.object
}

Header.defaultProps = {
  headerInfo: {
    siteTitle: ``,
    title: ``,
    socialIcons: false
  }
}

export default Header
