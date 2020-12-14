import React from 'react';

import './Brands.scss';

function Brands({callback}) {
  return (
    <div className="skills-section">
      <button onClick={() => callback()}>Sneaky Button</button>
      <div className="wrapper">
        <h2>Brands</h2>
        <div className="skills-wrapper">
          <div className="skill">
            <img
              src="https://www.jdm-import.com/wp-content/uploads/2014/03/toyota_f-200x150.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://www.jdm-import.com/wp-content/uploads/2014/02/nissan_f-200x150.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://www.jdm-import.com/wp-content/uploads/2014/02/honda_f-200x150.png"
              alt=""
            />
          </div>
          <div className="skill">
            <img
              src="https://www.jdm-import.com/wp-content/uploads/2014/02/mazda_f-200x150.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
