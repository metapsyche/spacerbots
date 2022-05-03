import React, { Component, useState } from 'react';

import SocialMedia from './onepager/SocialMedia';
import Splash from './onepager/Splash';



function Home() {
  const [ authorized, setAuthorized ] = useState(false);
  const [ showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="home">

        <div className="section section--splash" style={{ backgroundColor: 'gray' }}>
          <Splash></Splash>
        </div>
        
        {/* Social Media */}
        <div className="section" style={{ backgroundColor: 'whitesmoke' }}>
          <div className="content">
            <div style={{ textAlign: "left", padding: "5% 12%" }}>
              <SocialMedia></SocialMedia>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
