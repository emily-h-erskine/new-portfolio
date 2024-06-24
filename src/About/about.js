import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoOfMe from "./Me.jpg";

export default function About() {
  return (
    <main id="main" style={{ marginLeft: '5%'}}>
      <div className="row">
        <div className="col-md-5 mb-4">
          <img src={PhotoOfMe} alt="Emily-Huong Erskine" width="100%" />
          <br />
          <p className="lead text-center text-muted">
            Fusing creativity and individuality in design and martial arts, always pushing boundaries and making a unique mark.
          </p>
          <br />
          <h3>Introducing Me</h3>
          <br />
          <p>
            Welcome to my E-Portfolio! Hello, my name is Emily-Huong Erskine, and a recent graduate of Atlantic Technological University, Sligo Campus where I studied for my degree in Application Design and User Experience, achieving a 1.1 (First Class Honors). 
            I have a passion for all things computing and design. I have a very creative mind, I'm hardworking and determined—always happy to learn and expand my knowledge and skillsets.
          </p>
        </div>
        <div className="col-md-1 d-none d-md-block"></div>
        <div className="col-md-5">
          <h3>My Design Process</h3>
          <br />
          <p>
          As a UX designer, the first step I take in any project is to conduct user research. By understanding the users, it helps me design with the user in mind.
            I create a basic design on paper to showcase the flow of the product (lo-fi prototype). This is an important stage as it ensures that the product is intuitive
            and easy to navigate before digitalising the product. Visual design involves adding colour, typography, and other visual elements to the wireframes. I create a visual
            language that is consistent throughout the product, which helps to create an emotional connection with the user. I then create an interactive mockup of the product,
            which allows me to test the user experience and identify any issues that need to be fixed. I make changes to the prototype until I am satisfied that the product
            is easy to use and meets the users' needs. Throughout each of these steps, I continuously conduct user tests, testing the product through various stages with
            real users to see how they interact with it. I observe their behaviour and listen to their feedback. Based on the feedback received, I make any changes needed to
            the product. Overall, the UX design process is a methodical approach that involves several stages. By following this process, I can create products that are both
            useful and easy to use. By putting the user at the centre of the design, I can create products that truly meet their needs and deliver a great user experience.
          </p>
        </div>
      </div>
    </main>
  );
}