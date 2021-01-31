import React, { useState } from 'react';
import { NavBar, NavItem, ProfilePic } from './Header.styled';
import profilePic from '../../assets/imgs/profile.jpg';
import {
  AboutIcon,
  CertificateIcon,
  GraduationHatIcon,
  MailIcon,
  ResearchIcon,
} from '../icons';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <NavBar>
      <ProfilePic src={profilePic} alt="" onClick={() => setActive(!active)} />
      <NavItem
        exact
        to="/"
        activeClassName="activeNav"
        active={active}
        onClick={() => setActive(!active)}
      >
        <AboutIcon noStyle />
        Summary
      </NavItem>
      <NavItem
        exact
        to="/education"
        activeClassName="activeNav"
        active={active}
        onClick={() => setActive(!active)}
      >
        <GraduationHatIcon noStyle />
        Education
      </NavItem>
      <NavItem
        exact
        to="/experience"
        activeClassName="activeNav"
        active={active}
        onClick={() => setActive(!active)}
      >
        <ResearchIcon noStyle />
        Experience
      </NavItem>
      <NavItem
        exact
        to="/certificates"
        activeClassName="activeNav"
        active={active}
        onClick={() => setActive(!active)}
      >
        <CertificateIcon noStyle />
        Certificates
      </NavItem>
      <NavItem
        exact
        to="/contact"
        activeClassName="activeNav"
        active={active}
        onClick={() => setActive(!active)}
      >
        <MailIcon noStyle />
        Contact
      </NavItem>
    </NavBar>
  );
};

export default Header;
