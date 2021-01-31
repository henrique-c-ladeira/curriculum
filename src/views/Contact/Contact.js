import React from 'react';
import { Container, Content, Wrapper } from './Contact.styled';

import profilePic from '../../assets/imgs/profile.jpg';

import netPic from '../../assets/imgs/background.png';

import { GitHubIcon, LinkedinIcon, MailIcon } from '../../components/icons';

export const Contact = () => (
  <Container>
    <Wrapper>
      <h1>
        <MailIcon noStyle />
      </h1>
      <Content>
        <img alt="" src={profilePic} />
        <p>e-mail</p>
        <h2>henrique.c.ladeira@gmail.com</h2>
      </Content>
    </Wrapper>
    <Wrapper>
      <h1>Web Profiles</h1>
      <Content>
        <img alt="" src={netPic} />
        <div>
          <a href="https://github.com/henrique-c-ladeira">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/henrique-c-ladeira">
            <LinkedinIcon />
          </a>
        </div>
      </Content>
    </Wrapper>
  </Container>
);
