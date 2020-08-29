import { Row, Col, Container, ListGroup, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import facebookIcon from "../images/Facebook.webp"
import githubIcon from "../images/Github.webp"
import instagramIcon from "../images/Instagram.webp"
import linkedinIcon from "../images/Linkedin.webp"
import twitterIcon from "../images/Twitter.webp"

const Header = ({ siteTitle }) => (
  <header>
    <Container className="header">
      <div className="header header-home">
        <div className="banner-text text-center">
          <h1>I'm Lars Nyström</h1>
          <p>
            Systems and their data, keeping 'em all together.
            <br /> Love to travel to places with lots of sun or lots of snow.
            <br />
            <b>
              Skinnskatteberg {"->"} Gothenburg {"->"} Skövde
            </b>
          </p>
          <div class="socialicons">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/larsnystrom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/433eros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/littleandi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/lasse77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/LittleAndi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="Github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
