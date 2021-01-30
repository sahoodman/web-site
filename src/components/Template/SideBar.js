import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sourav K Sahoo</h2>
        <p><a href="mailto:souravsahoo333@gmail.com">souravsahoo333@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sourav. I like building things.
        I am a <a href="https://nitrkl.ac.in/">NIT Rourkela</a> graduate, Alumni, and
        the co-founder and CTO of <a href="https://codehub.com">CodeHub</a>. After CodeHub I work
        at <a href="https://deloitte.com">Deloitte</a>
        , <a href="https://drdo.com">DRDO</a>
        , <a href="https://planetaryresources.com">SPARK</a>
        , <a href="https://facebook.com">Google</a>
        , and <a href="https://nss.org">NSS</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; SouravKSahoo <Link to="/">souravksahoo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
