import React from 'react';
import "./Certificate.css";
import c1 from '../../Images/c1.jpg';
import c2 from '../../Images/c2.jpg';
import c3 from '../../Images/c4.jpg';
import hr from '../../Images/hr.gif';
import uc from '../../Images/uc.gif';
import lk from '../../Images/lk.gif';

const Certificate = () => {
  return (
    
    <section className="certificate" id="certificate">
 
  <div className="column">
    <div className="image">
      <img src={uc} alt="Company 1 logo" />
    </div>
    <div className="certificate">
      <img src={c1} alt="Company 1 certificate" />
    </div>
  </div>
  <div className="column">
    <div className="image">
      <img src={hr} alt="Company 2 logo" />
    </div>
    <div className="certificate">
      <img src={c2} alt="Company 2 certificate" />
    </div>
  </div>
  <div className="column">
    <div className="image">
      <img src={lk} alt="Company 3 logo" />
    </div>
    <div className="certificate">
      <img src={c3} alt="Company 3 certificate" />
    </div>
  </div>
</section>

  );
};

export default Certificate;
