import React from 'react';
import { NavBar, NavItem, ProfilePic } from './Header.styled';
import profilePic from '../../assets/imgs/profile.jpg';
import { AboutIcon, GraduationHatIcon, ResearchIcon } from '../icons';

export const Header = () => (
  <NavBar>
    <ProfilePic src={profilePic} alt="" />
    <NavItem onClick={() => {}}>
      <AboutIcon noStyle />
      About
    </NavItem>
    <NavItem onClick={() => {}}>
      <GraduationHatIcon noStyle />
      Education
    </NavItem>
    <NavItem onClick={() => {}}>
      <ResearchIcon noStyle />
      Experience
    </NavItem>
  </NavBar>
);
