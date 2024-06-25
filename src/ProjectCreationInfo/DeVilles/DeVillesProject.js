import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ogDevillesImage from '../images/ogDevillesWebsite.png';
import userflowImage from '../images/userflow-devilles.png';
import empathyMapImage from '../images/empathymap-devilles.jpeg';
import cjmImage from '../images/cjm-devilles.jpg';
import icjmImage from '../images/icjm - devilles.jpg';
import storyboardImage from '../images/storyboard - devilles.png';
import lofiPrototypeImage from '../images/lofi prototype - devilles.png';
import lofiErinImage from '../images/lofi-erin-devilles.png';
import lofiColmImage from '../images/lofi-colm-devilles.png';
import midfiImage from '../images/devilles-midfi.png';
import logoSloganImage from '../images/logo:slogan - devilles.png';
import synCapImage from '../images/syn:cap - devilles.png';
import hifiImage from '../images/hifi-devilles.png';

export default function DeVilles() {
  return (
    <main className="container-fluid py-5" style={{padding: '5%'}}>
      <div className="row">
        <div className="col">
          <hr />
          <h2 className="section-title"><span>DeVille's Restaurant Website Redesign</span></h2>
          <h6 className="text-center">Role: Sole UX/UI Designer | Client: DeVille's Restaurant | Tools: Adobe XD</h6>
          <hr />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <p>
            DeVille's is a restaurant in the affluent village of Dalkey, Co. Dublin, home to many of Ireland's multi-millionaires. The client company is looking for a website redesign that will properly reflect their passion.
            <br /><br />
            The original website received negative reviews because users weren't able to navigate the site properly to make reservations and purchase vouchers. Based on the content of the reviews, we hypothesized what we could do to make the user's experience better.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={ogDevillesImage} className="img-fluid" alt="Original DeVille's Website" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={userflowImage} className="img-fluid" alt="User Flow" />
        </div>
        <div className="col-lg-6">
          <h5 className="text-left"><b>User Flow</b></h5>
          <p>
            Sketch/use digital media to illustrate DeVille's website's user flow based on the option below: Information about the restaurant including some history and menu highlights.
          </p>
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="text-left"><b>What Did I Do?</b></h5>
          <p>
            I was the sole UX designer/researcher on this project, conducting everything from research to usability tests and creating prototypes from low-fidelity paper prototypes to digital, interactive hi-fi designs. I was responsible for determining the overall design direction of the project, while communicating with my lecturer and peers to gain feedback on my work.
          </p>
          <h5 className="text-left"><b>Empathy Map</b></h5>
          <p>
            The empathy-mapping process helps distill and categorize your knowledge of the user into one place. It can be used to capture who a user is. It makes sense of qualitative research (research notes, user-interviews).
          </p>
        </div>
        <div className="col-lg-6">
          <img src={empathyMapImage} className="img-fluid" alt="Empathy Map" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={cjmImage} className="img-fluid" alt="Customer Journey Map" />
        </div>
        <div className="col-lg-6">
          <h5 className="text-left"><b>Customer Journey Map</b></h5>
          <p>
            Usability testing on the original site showed that users could not navigate the site comfortably to make reservations or purchase vouchers. Therefore, work was needed to redesign the website to make it more comfortable for the users. Using the pain points gathered from users to see what needed to be improved on the most.
            <br /><br />Pain Points:
            <ul>
              <li>Complicated way to book a table</li>
              <li>Everything laid out on one page</li>
              <li>Unappealing site to look at / out of date appearance</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="text-left"><b>Ideal Customer Journey Map</b></h5>
          <p>
            To get the ideal customer journey - we take what the user wants to experience when booking a table at a restaurant's website and implement that into a customer journey map that always leaves the user satisfied.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={icjmImage} className="img-fluid" alt="Ideal Customer Journey Map" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <img src={storyboardImage} className="img-fluid" alt="Storyboard" />
        </div>
        <div className="col-lg-6">
          <h5 className="text-left"><b>Storyboard</b></h5>
          <p>
            The storyboard is used to give a visual look into the user's experience - the goal is to tell the story of a user's journey through drawings/images.
          </p>
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="text-left"><b>Lo-Fi Prototype</b></h5>
          <p>
            Sketched screens and states were photographed and inserted into Marvel app for usability testing purposes. Research participant feedback was noted.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={lofiPrototypeImage} className="img-fluid" alt="Lo-Fi Prototype" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-3">
          <img src={lofiErinImage} className="img-fluid" alt="Lo-Fi Erin" />
        </div>
        <div className="col-lg-3">
          <img src={lofiColmImage} className="img-fluid" alt="Lo-Fi Colm" />
        </div>
        <div className="col-lg-6">
          <h5 className="text-left"><b>Lo-Fi Usability Tests/Notes</b></h5>
          <p>
            Two research participants were interviewed, observed and recorded as they navigated through the low-fidelity prototype. Qualitative research notes were transcribed, heat map data was retrieved and shown below.
            <br /><br />Noted research participant feedback was incorporated into further product development. The low-fidelity prototype was consequently updated and tested again.
          </p>
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="text-left"><b>Mid-Fi Prototype</b></h5>
          <p>
            Following low-fidelity product development, screens and screen states were then created using Adobe XD and tested by research participants via the program's usability testing feature.
            <br /><br />Research participant feedback was further incorporated into product development. The mid-fidelity prototype was consequently cyclically iterated, tested and updated.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={midfiImage} className="img-fluid" alt="Mid-Fi Prototype" />
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-3">
          <img src={logoSloganImage} className="img-fluid" alt="Logo and Slogan" />
        </div>
        <div className="col-lg-3">
          <img src={synCapImage} className="img-fluid" alt="Synthesis and Captions" />
        </div>
        <div className="col-lg-6">
          <h5 className="text-left"><b>A/B Testing</b></h5>
          <p>
            After the mid-fi process, we start looking into different design decisions for the website. When there are a few options for the same thing; such as font, color palette, slogan, or if there's different options for designing a certain page of the project, we ask users to assist in picking
            are a few options for the same thing; such as font, color palette, slogan, or if there's different options for designing a certain page of the project, we ask users to assist in picking
          </p>
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
