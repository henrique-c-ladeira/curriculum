import React from 'react';
import { CertificateIcon } from '../../components/icons';
import { Container, Content, Wrapper } from './Certificates.styled';

import ieltsLogo from '../../assets/imgs/ielts.png';
import pirpleLogo from '../../assets/imgs/pirple.png';

import senaiLogo from '../../assets/imgs/senai.png';
import leanLogo from '../../assets/imgs/lean.png';
import udemyLogo from '../../assets/imgs/udemy.svg';

export const Certificates = () => (
  <Container>
    <Wrapper>
      <h1>
        <CertificateIcon noStyle />
      </h1>
      <Content>
        <img alt="" src={pirpleLogo} />
        <a href="https://www.pirple.com/certificates/hgayskcloy">Certificate</a>
        <h1>The Node.js Master Class</h1>
        <p>Pirple</p>
        <desc>2021</desc>
      </Content>
      <Content>
        <img alt="" src={ieltsLogo} />
        <p>IELTS General Training</p>
        <h1>English Proficiency Test</h1>
        <p>Overall Band Score: 8.0/9.0, CEFR Level: C1</p>
        <desc>2020</desc>
      </Content>
      <Content>
        <img alt="" src={udemyLogo} />
        <h1>Python Language Course</h1>
        <p>Udemy</p>
        <desc>35.5 hours - 2020</desc>
      </Content>
      <Content>
        <img alt="" src={senaiLogo} />
        <h1>Programmable Logic Controller</h1>
        <p>Serviço Nacional de Aprendizagem Industrial</p>
        <desc>40 hours - 2012</desc>
      </Content>
      <Content>
        <img alt="" src={leanLogo} />
        <h1>Advanced Excel Applied to Engineering Course</h1>
        <p>Lean Solutions</p>
        <desc>20 hours - 2015</desc>
      </Content>
    </Wrapper>
  </Container>
);
