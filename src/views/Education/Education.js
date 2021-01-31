import React from 'react';
import { CourseIcon, GraduationHatIcon } from '../../components/icons';
import { Container, Content, Wrapper } from './Education.styled';
import cefetIcon from '../../assets/imgs/cefet.png';
import aaltoIcon from '../../assets/imgs/aalto.png';
import senaiIcon from '../../assets/imgs/senai.png';
import leanIcon from '../../assets/imgs/lean.png';
import udemyIcon from '../../assets/imgs/udemy.svg';

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
      <h1>
        <CourseIcon noStyle />
      </h1>
      <Content>
        <img alt="" src={udemyIcon} />
        <h1>Python Language Course</h1>
        <p>Udemy</p>
        <desc>35.5 hours - 2020</desc>
      </Content>
      <Content>
        <img alt="" src={senaiIcon} />
        <h1>Programmable Logic Controller</h1>
        <p>Serviço Nacional de Aprendizagem Industrial</p>
        <desc>40 hours - 2012</desc>
      </Content>
      <Content>
        <img alt="" src={leanIcon} />
        <h1>Advanced Excel Applied to Engineering Course</h1>
        <p>Lean Solutions</p>
        <desc>20 hours - 2015</desc>
      </Content>
    </Wrapper>
  </Container>
);
