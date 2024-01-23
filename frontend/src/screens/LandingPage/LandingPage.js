import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReferreesTraining from "./images/ReferreesTraining.jpg"
import BrewedTalent from "./images/BrewedTalent.jpg"
import NoshInAction from "./images/NoshInAction.jpg"
import TeamMeetingBeforeKickOff from "./images/TeamMeetingBeforeKickOff.jpg"

const LandingPage = () => {
  return (
    <section>
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center psting">
      <div
        class="bg-img absolute top-0 w-full h-full bg-center bg-cover"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
        <div class="container relative mx-auto">
            <div class="flex flex-wrap justify">
                <div class="grow lg:w-6/12 px-4 ml-auto mr-auto">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img src={BrewedTalent} alt="Brewed Talent Image"/>
                        <Carousel.Caption>
                        <h3>Masii FC vs Kathekani FC</h3>
                        <p>A friendly away match with Kathekani FC emerged winners.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <img src={ReferreesTraining} alt="Referrees Training Image"/>
                        <Carousel.Caption>
                        <h3>Referrees Training Award</h3>
                        <p>Four of our own players gets certified to officiate FKF matched after a rigorous training held at Tawa social hall.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={NoshInAction} alt="Nosh Inaction Image" />
                        <Carousel.Caption>
                        <h3>SCOTTLANDERS FC 5 : 3 KATHEKANI FC</h3>
                        <p>
                            Kathekani FC Suffered an away defeat against Scotlanders FC on a Sunday.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div class="justify-end lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div class="pr-12">
                        <h1 class="text-white font-semibold text-2xl">
                            KATHEKANI FOOTBALL CLUB
                        </h1>
                        <p class="mt-4 text-lg text-gray-300">
                        Founded in 2008, our achievements include winning the Crll. Kalia Cup in 2010, the 2013 Dr. Musembi Cup (Songeni), and consecutive victories in the Ligi Mashinani in 2016, 2017, 2018, 2019, and 2020. Additionally, we claimed victory in the Muting'a Cup in 2018, the Katumo Cup in 2020, and the Darius Cup in 2022.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
       
  );
}

export default LandingPage
