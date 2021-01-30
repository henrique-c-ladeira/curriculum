import React from 'react';
import { NavBar, NavItem, ProfilePic } from './Header.styled';
import profilePic from '../../assets/imgs/profile.jpg';
import { AboutIcon, GraduationHatIcon, ResearchIcon } from '../icons';

const Header = () => (
  <NavBar>
    <ProfilePic src={profilePic} alt="" />
    <NavItem exact to="/" activeClassName="activeNav">
      <AboutIcon noStyle />
      About
    </NavItem>
    <NavItem exact to="/education" activeClassName="activeNav">
      <GraduationHatIcon noStyle />
      Education
    </NavItem>
    <NavItem exact to="/experience" activeClassName="activeNav">
      <ResearchIcon noStyle />
      Experience
    </NavItem>
  </NavBar>
);

export default Header;
