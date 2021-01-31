import React from 'react';

import { Container, Wrapper, Content } from './Home.styled';

import { GitHubIcon, LinkedinIcon } from '../../components/icons';

export const Home = () => (
  <Container>
    <Wrapper>
      <h1>Henrique Curzio Ladeira</h1>
      <Content>
        <p>
          I am a Software Engineer working in the computer software industry.
          Skilled in programming languages which mainly includes Javascript
          (React and Node), Python, PHP and C for embedded systems. Zealous
          engineering professional with a Bachelor&apos;s Degree in Control and
          Automation Engineering.
        </p>
        <p>
          As a professional I have a background in Fullstack Web Development
          acting in code maintenance and development of web projects and mobile
          apps.
        </p>
        <p>
          I have a passion for learning new concepts and technologies. As a
          undergraduate student I worked as course assistant in Calculus and
          Data Structure. I also worked as a researcher in Power
          Electronics/Embedded Systems where I had the oportunnity to gather a
          solid background in programming languages, specially low-level ones.
          Graduated with merit with a GPA of 85.53%.
        </p>
        <p>
          After I graduated I started focusing more towards high level languages
          such as Python which eventually led me to web development frameworks
          and I ended up learning HTML, CSS and Javascript. From then on I
          started to pursue a carrer in software development.
        </p>
        <p>
          I currently work with React, React Native and Node.js development for
          mobile and web. I am a self-taught enthusiastic learner and I bear in
          mind that one of the best ways to consolidate your knowledge is by
          teaching and one of the effortless ways to learn is through humility.
        </p>
      </Content>
      <a href="https://github.com/henrique-c-ladeira">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/henrique-c-ladeira">
        <LinkedinIcon />
      </a>
    </Wrapper>
  </Container>
);
