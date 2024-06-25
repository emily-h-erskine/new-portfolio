import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DeVillesPrototype() {
  return (
    <main className="container-fluid py-5" style={{ padding: '0 5%' }}>
      <hr />
      <h2 className="section-title"><span>DeVilles Restaurant</span></h2>
      <h5 className="text-center">Redesigning a Website</h5>
      <hr />
      <br /><br />
      <h5 className="text-center">Try out the Prototype</h5>
      <br/>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Adobe XD Prototype"
          src="https://xd.adobe.com/embed/0edfa59c-aeeb-4548-863b-2b60e3615cc2-5b8c/?fullscreen&hints=off"
          allowFullScreen
          width={'100%'}
          height={'100%'}
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </main>
  );
}