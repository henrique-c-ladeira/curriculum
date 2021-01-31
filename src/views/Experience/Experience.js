import React from 'react';
import {
  BlenderIcon,
  GitIcon,
  NodeIcon,
  PhpIcon,
  PythonIcon,
  ReactIcon,
} from '../../components/icons';
import { Container, Content, Wrapper } from './Experience.styled';

import rbmwebIcon from '../../assets/imgs/rbmweb.png';
import cefetIcon from '../../assets/imgs/cefet.png';
import cnpqIcon from '../../assets/imgs/cnpq.png';

export const Experience = () => (
  <Container>
    <Wrapper>
      <h1>
        <ReactIcon noStyle />
        <NodeIcon noStyle />
        <PhpIcon noStyle />
        <PythonIcon noStyle />
        <GitIcon noStyle />
        <BlenderIcon noStyle />
      </h1>
      <Content>
        <img alt="" src={rbmwebIcon} />
        <p>RBMWeb</p>
        <h1>Software Developer</h1>
        <p>
          Maintenance and development of web and mobile apps. Programming mainly
          in React, Node and PHP.
        </p>
        <desc>2020 - present</desc>
      </Content>
      <Content>
        <img alt="" src={cefetIcon} />
        <p>CEFET-MG</p>
        <h1>Course Assistant</h1>
        <p>
          Assistant in lectures and teaching in Data Structure and C
          Programming.
        </p>
        <desc>2016</desc>
      </Content>
      <Content>
        <img alt="" src={cnpqIcon} />
        <p>CNPq</p>
        <h1>Academic Research</h1>
        <p>
          Theroretical Study and Experimental Implementation of a Control
          Circuitry for a 3-level inverter.
        </p>
        <desc>2012</desc>
      </Content>
      <Content>
        <img alt="" src={cefetIcon} />
        <p>CEFET-MG</p>
        <h1>Course Assistant</h1>
        <p>
          Assistant in lectures and teaching in Diferential and Integral
          Calculus.
        </p>
        <desc>270 hours - 2011</desc>
      </Content>
    </Wrapper>
  </Container>
);
