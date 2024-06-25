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
    <main className="flex min-h-screen flex-col justify-between p-24">
      <hr />
      <h2 className="section-title"><span>DeVille's Restaurant Website Redesign</span></h2>
      <h6 className="text-center">Role: Sole UX/UI Designer | Client: DeVille's Restaurant | Tools: Adobe XD</h6>
      <hr />

      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              DeVille's is a restaurant in the affluent village of Dalkey, Co. Dublin, home to many of Ireland's multi-millionaires. The client company is looking for a website redesign that will properly reflect their passion.
              <br /><br />
              The original website received negative reviews because users weren't able to navigate the site properly to make reservations and purchase vouchers. Based on the content of the reviews, we hypothesized what we could do to make the user's experience better.
            </td>
            <td width="4%"></td>
            <td width="48%">
              <img src={ogDevillesImage} alt="Original DeVille's Website" />
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <img src={userflowImage} alt="User Flow" />
            </td>
            <td width="4%"></td>
            <td width="48%">
              <h5 className="text-left"><b>User Flow</b></h5>
              <br />Sketch/use digital media to illustrate DeVille's website's user flow based on the option below: Information about the restaurant including some history and menu highlights.
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <h5 className="text-left"><b>What Did I Do?</b></h5>
              <br />I was the sole UX designer/researcher on this project, conducting everything from research to usability tests and creating prototypes from low-fidelity paper prototypes to digital, interactive hi-fi designs. I was responsible for determining the overall design direction of the project, while communicating with my lecturer and peers to gain feedback on my work.
              <br /><br />
              <h5 className="text-left"><b>Empathy Map</b></h5>
              <br />The empathy-mapping process helps distill and categorize your knowledge of the user into one place. It can be used to capture who a user is. It makes sense of qualitative research (research notes, user-interviews).
            </td>
            <td width="4%"></td>
            <td width="48%">
              <img src={empathyMapImage} alt="Empathy Map" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <img src={cjmImage} alt="Customer Journey Map" />
            </td>
            <td width="4%"></td>
            <td width="48%">
              <h5 className="text-left"><b>Customer Journey Map</b></h5>
              <br />Usability testing on the original site showed that users could not navigate the site comfortably to make reservations or purchase vouchers. Therefore, work was needed to redesign the website to make it more comfortable for the users. Using the pain points gathered from users to see what needed to be improved on the most.
              <br /><br />Pain Points:
              <ul>
                <li>Complicated way to book a table</li>
                <li>Everything laid out on one page</li>
                <li>Unappealing site to look at / out of date appearance</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <h5 className="text-left"><b>Ideal Customer Journey Map</b></h5>
              <br />To get the ideal customer journey - we take what the user wants to experience when booking a table at a restaurant's website and implement that into a customer journey map that always leaves the user satisfied.
            </td>
            <td width="4%"></td>
            <td width="48%">
              <img src={icjmImage} alt="Ideal Customer Journey Map" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <img src={storyboardImage} alt="Storyboard" />
            </td>
            <td width="4%"></td>
            <td width="48%">
              <h5 className="text-left"><b>Storyboard</b></h5>
              <br />The storyboard is used to give a visual look into the user's experience - the goal is to tell the story of a user's journey through drawings/images.
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <table width="100%">
        <tbody>
          <tr>
            <td width="48%">
              <h5 className="text-left"><b>Lo-Fi Prototype</b></h5>
              <br />Sketched screens and states were photographed and inserted into Marvel app for usability testing purposes. Research participant feedback was noted.
            </td>
            <td width="4%"></td>
            <td width="48%">
              <img src={lofiPrototypeImage} alt="Lo-Fi Prototype" />
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <table width="100%">
        <tbody>
          <tr>
            <td width="25%">
              <img src={lofiErinImage} alt="Lo-Fi Erin" />
            </td>
            <td width="1%"></td>
            <td width="25%">
              <img src={lofiColmImage} alt="Lo-Fi Colm" />
            </td>
            <td width="4%"></td>
            <td width="45%">
              <h5 className="text-left"><b>Lo-Fi Usability Tests/Notes</b></h5>
              <br />Two research participants were interviewed, observed and recorded as they navigated through the low-fidelity prototype. Qualitative research notes were transcribed, heat map data was retrieved and shown below.
              <br /><br />Noted research participant feedback was incorporated into further product development. The low-fidelity prototype was consequently updated and tested again.
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td width="46%">
              <h5 className="text-left"><b>Mid-Fi Prototype</b></h5>
              <br />Following low-fidelity product development, screens and screen states were then created using Adobe XD and tested by research participants via the program's usability testing feature.
              <br /><br />Research participant feedback was further incorporated into product development. The mid-fidelity prototype was consequently cyclically iterated, tested and updated.
            </td>
            <td width="4%"></td>
            <td width="50%">
              <img src={midfiImage} alt="Mid-Fi Prototype" />
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td width="25%">
              <img src={logoSloganImage} alt="Logo and Slogan" />
            </td>
            <td width="1%"></td>
            <td width="25%">
              <img src={synCapImage} alt="Synthesis and Captions" />
            </td>
            <td width="4%"></td>
            <td width="45%">
              <h5 className="text-left"><b>A/B Testing</b></h5>
              <br />After the mid-fi process, we start looking into different design decisions for the website. When there are a few options for the same thing; such as font, color palette, slogan, or if there's different options for designing a certain page of the project, we ask users to assist in picking
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
              <td width="48%">
                <h5 className="text-left"><b>High Fidelity Prototype</b></h5>
                <br />Following mid-fidelity product development, Adobe XD documents were precisely converted to a different document and with careful color choices following the theme and atmosphere I wanted to create - I made my high fidelity prototype.
                <br /><br />Further usability tests were conducted on the consequent high-fidelity prototype. Research participant feedback was noted and incorporated into further product development.
                <br /><br /><br /><a href="/devilles-prototype"><u>Try out the prototype</u></a>
              </td>
              <td width="4%"></td>
              <td width="48%">
                <img src={hifiImage} alt="Hi-Fi Prototype" />
              </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}