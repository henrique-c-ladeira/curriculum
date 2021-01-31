import React from 'react';
import { GraduationHatIcon } from '../../components/icons';
import { Container, Content, Wrapper } from './Education.styled';
import cefetIcon from '../../assets/imgs/cefet.png';
import aaltoIcon from '../../assets/imgs/aalto.png';

export const Education = () => (
  <Container>
    <Wrapper>
      <h1>
        <GraduationHatIcon noStyle />
      </h1>
      <Content>
        <img alt="" src={cefetIcon} />
        <h1>Control and Automation Engineering</h1>
        <p>Centro Federal de Educação Tecnológica de Minas Gerais</p>
        <desc>2017</desc>
        <desc>GPA - 85.53%</desc>
      </Content>
      <Content>
        <img alt="" src={aaltoIcon} />
        <h1>Automation and Systems Technology</h1>
        <p>Aalto University - Finland</p>
        <desc>2014</desc>
        <desc>Exchange Student</desc>
      </Content>
    </Wrapper>
  </Container>
);
