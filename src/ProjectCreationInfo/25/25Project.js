import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Playing25 from '../images/playingplay25.jpg';
import Play25Stakeholder from '../images/stakeholder.jpeg';
import empathyMapImage from '../images/empathymap-play25.png';
import cjmImage from '../images/cjm-play25.jpg';
import usabilitytests from '../images/play25 - usabilitytests.png';
import lofiPrototypeImage from '../images/lo-fi - play25.png'
import hifiImage from '../images/hifi-devilles.png';


export default function Play25Online() {
  return (
    <main className="container-fluid py-5" style={{padding: '0 5%'}}>
      <div className="row">
        <div className="col">
          <hr />
          <h2 className="section-title"><span>Play25 Online</span></h2>
          <h6 className="text-center">Role: Sole UX/UI Designer | Client: Play25 Online - Padraig G | Tools: Adobe XD</h6>
          <hr />

          <br />

          <h5 class="text-left"><b>The Vision</b></h5>
          <br />
          <p>
            We want to build the ultimate home for 25: an online version of the game that is great for beginners and veterans alike. A haven where beginners can learn, safe in the knowledge that they will not have obscenities screamed at them for playing the wrong card at the wrong time. And then there are the others—those who are experts and those who think they are experts! We will be offering members an online place to learn and play on any internet-connected phone, tablet, or PC.
          </p>

        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 class="text-left"><b>What Did I Do?</b></h5>
          <p>
              I was the sole UX designer/researcher on this project, conducting everything from research to usability tests and creating prototypes from low-fidelity paper prototypes to digital, interactive hi-fi designs. I was responsible for determining the overall design direction of the project, while communicating with my lecturer and peers to gain feedback on my work.
          </p>
          <h5 class="text-left"><b>Desk Research</b></h5>
          <p>
              As part of our desk research, we had to teach others how to play the game. This is to show how you'd create a tutorial when designing the game, so it's accessible to beginners and advanced players alike.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={Playing25} className="img-fluid" alt="Playing 25" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={Play25Stakeholder} className="img-fluid" alt="Play 25 Stakeholder" />
        </div>
        <div className="col-lg-6">
          <h5 class="text-left"><b>Stakeholder Interview Findings</b></h5>
          <p>
              It was evident from the stakeholder interview that there was great scope for creativity. The stakeholder said that the sky's the limit. We also weren't designing for just one audience but multiple. We had to cater for a wide range of abilities and ages, with the aim of making the application engaging for all.
          </p>
          <h5 class="text-left"><b>User Stories</b></h5>
          <ul>
              <li>
                  I am a 40-year-old native of Sligo, currently working in Sydney, who would love to reengage with friends by our weekly game of 25, using my mobile phone.
              </li>
              <li>
                  I am a high school student from Boston, whose granny is from and lives in Donegal. I would love to bond with her by learning her favorite game 25, so she can play it with me when she sees her this Christmas.
              </li>
              <li>
                  We are a group of students from all over the world with a mutual love of Ireland and Irish culture. We would like to meet new friends and play 25 in a safe and comfortable manner online using our mobile phones.
              </li>
          </ul>

        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 class="text-left"><b>Empathy Map</b></h5>
          <p>
              The empathy mapping process helps distill and categorize your knowledge of the user into one place. It can be used to capture who a user is and make sense of qualitative research (research notes, user interviews).
          </p>
          <p>&nbsp;</p>
          <b class="text-left">User Pain Points</b>
          <ul>
              <li>Can't follow the rules (no essay - play a game / go through a tutorial)</li>
              <li>Too many steps to get into a game</li>
              <li>Must create an account to play</li>
          </ul>
          <b class="text-left">User Goals</b>
          <ul>
              <li>Make learning the rules of the game easy, fun, and interactive</li>
              <li>Limit the number of steps</li>
              <li>Have a guest option so users can play straight away</li>
          </ul>

        </div>
        <div className="col-lg-6">
          <img src={empathyMapImage} className="img-fluid" alt="Empathy Map" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={cjmImage} className="img-fluid" alt="Ideal Customer Journey Map" />
        </div>
        <div className="col-lg-6">
        <h5 class="text-left"><b>Ideal Customer Journey Map</b></h5>
        <p>
            User goals and pain points, determined through the research, were translated into an easy-to-read and graphically structured document to assist future product design.
        </p>
        <p>&nbsp;</p>
        <p>Helps show the user's route through the site, navigating through the particular task.</p>

        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 class="text-left"><b>Key Insights from Usability Test</b></h5>
          <p>&nbsp;</p>
          <ul>
              <li>User is completely lost - "and I don't know what's going on here."</li>
              <li>User's not focused on where they should be looking.</li>
              <li>User is completely disconnected when using the original site.</li>
              <li>Feeling deflated.</li>
              <li>User expecting a tutorial - "I feel like a toddler just slapping on a toy."</li>
          </ul>

        </div>
        <div className="col-lg-6">
          <img src={usabilitytests} className="img-fluid" alt="Usability Test Notes" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={lofiPrototypeImage} className="img-fluid" alt="Lo-Fi Prototype" />
        </div>
        <div className="col-lg-6">
          <h5 class="text-left"><b>Lo-Fi Prototype</b></h5>
          <p>
              Sketched screens and states were photographed and inserted into Marvel app for usability testing purposes. Research participant feedback was noted.
          </p>
          <p>&nbsp;</p>
          <b class="text-left">Iterations of Lo-Fi Prototype Based on Feedback</b>
          <ul>
              <li>Increase text size - as it was noted during the testing process that the text was too small, and users couldn't read the writing.</li>
          </ul>
        </div>
      </div>



      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="text-left"><b>High Fidelity Prototype</b></h5>
          <p>
            Following mid-fidelity product development, Adobe XD documents were precisely converted to a different document and with careful color choices following the theme and atmosphere I wanted to create - I made my high fidelity prototype.
            <br /><br />Further usability tests were conducted on the consequent high-fidelity prototype. Research participant feedback was noted and incorporated into further product development.
            <br /><br /><br /><a href="/devilles-prototype"><u>Try out the prototype</u></a>
          </p>
        </div>
        <div className="col-lg-6">
          <img src={hifiImage} className="img-fluid" alt="Hi-Fi Prototype" />
        </div>
      </div>
    </main>
  );
}