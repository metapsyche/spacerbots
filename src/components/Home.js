import React, { Component, useState } from 'react';

import WhyMash from './onepager/WhyMash';
import WhoBenefits from './onepager/WhoBenefits';
import TheContract from './onepager/TheContract';
import StateAffairs from './onepager/StateAffairs';
import InterestedPartners from './onepager/InterestedPartners';
import TheDapp from './onepager/TheDapp';
import SocialMedia from './onepager/SocialMedia';
import Splash from './onepager/Splash';
import MusicArt from './onepager/MusicArt';
import HowDoes from './onepager/HowDoes';


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
