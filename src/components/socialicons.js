import { Container } from "react-bootstrap"
import React from "react"

import facebookIcon from "../images/Facebook.webp"
import githubIcon from "../images/Github.webp"
import instagramIcon from "../images/Instagram.webp"
import linkedinIcon from "../images/Linkedin.webp"
import twitterIcon from "../images/Twitter.webp"

const SocialIcons = () => (
    <Container className="socialicons">
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
    </Container>
)

export default SocialIcons