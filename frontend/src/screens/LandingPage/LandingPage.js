import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReferreesTraining from "./images/ReferreesTraining.jpg"
import BrewedTalent from "./images/BrewedTalent.jpg"
import NoshInAction from "./images/NoshInAction.jpg"
import TeamMeetingBeforeKickOff from "./images/TeamMeetingBeforeKickOff.jpg"

const LandingPage = () => {
  return (
    <div>
      <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={ReferreesTraining}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={BrewedTalent}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={NoshInAction}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TeamMeetingBeforeKickOff}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    </div>
  )
}

export default LandingPage
