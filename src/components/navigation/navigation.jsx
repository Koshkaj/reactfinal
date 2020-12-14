import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    if (showNavigation) {
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = 'unset');
    }
  }, [showNavigation]);

  return (
    <>
      <div
        className={`burger ${showNavigation ? 'toggle' : ''}`}
        onClick={() => setShowNavigation(!showNavigation)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`navbar-wrapper ${showNavigation ? 'active' : ''}`}>
        <nav>
          <div className="profile-wrapper">
            <img
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09vluVVrhGmoj6sDFLl00O4cvw2MouvOb3w&usqp=CAU'
              }
              title="JDM"
              alt=""
              className="profile-picture"
            />
          </div>

          <ul>
            <li>
              <Link
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/about"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="/brands"
              >
                Brands
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="/parts"
              >
                Parts
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
