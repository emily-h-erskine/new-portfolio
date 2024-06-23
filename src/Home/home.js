import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
        <div className="thumbnails recentworks row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <a className="thumbnail" href="/devilles">
              <span className="img">
                <img src="assets/images/devilles-home.png" alt="" />
                <span className="cover"><span className="more">See details &rarr;</span></span>
              </span>
              <span className="title">DeVille's Project</span>
            </a>
            <span className="details"><a href="/devilles">Web design</a> | <a href="/devilles-prototype">View Prototype</a></span>
            <h4></h4>
            <p></p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <a className="thumbnail" href="/25">
              <span className="img">
                <img src="assets/images/25-home.png" alt="" />
                <span className="cover"><span className="more">See details &rarr;</span></span>
              </span>
              <span className="title">Play 25 Online App Game</span>
            </a>
            <span className="details"><a href="/25">App Design</a> | <a href="/25-prototype">View Prototype</a></span>
            <h4></h4>
            <p></p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <a className="thumbnail" href="/RSA">
              <span className="img">
                <img src="assets/images/rsa-home.png" alt="" />
                <span className="cover"><span className="more">See details &rarr;</span></span>
              </span>
              <span className="title">RSA Design Competition - Mail Call</span>
            </a>
            <span className="details"><a href="/RSA">App Design</a> | <a href="/RSA-prototype">View Prototype</a></span>
            <h4></h4>
            <p></p>
          </div>
        </div>
    </main>
  );
}