import React from "react"
import { Row, Col, Container, ListGroup, Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import headerImage from "../images/skydive_2304x1032.webp"
import travelImage from "../images/img_8074_318x180.webp"
import workImage from "../images/kryssning_318x180.webp"
import spareTimeImage from "../images/loro_parque_318x180.webp"
import facebookIcon from "../images/Facebook.webp"
import githubIcon from "../images/Github.webp"
import instagramIcon from "../images/Instagram.webp"
import linkedinIcon from "../images/Linkedin.webp"
import twitterIcon from "../images/Twitter.webp"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <Card className="indexCard">
            <Card.Img variant="top" src={travelImage} />
            <Card.Body>
              <Card.Title>Travel</Card.Title>
              <Card.Text>
                In the winter with UCPA to the Alps, with a diversion to
                Hokkaido, Japan.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="indexCard">
            <Card.Img variant="top" src={workImage} />
            <Card.Body>
              <Card.Title>Work</Card.Title>
              <Card.Text>
                Title varies but my main focus is systems and their data,
                keeping 'em all together. Also throws in some analysis now and
                then.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="indexCard">
            <Card.Img variant="top" src={spareTimeImage} />
            <Card.Body>
              <Card.Title>Spare time</Card.Title>
              <Card.Text>
                #family #cat #friends #coding #learning #living
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
