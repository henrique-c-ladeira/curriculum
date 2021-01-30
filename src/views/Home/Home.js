import React from 'react';

import { Container, Wrapper, Content } from './Home.styled';

import { GitHubIcon, LinkedinIcon } from '../../components/icons';

// const INITIAL_STATE = {
//   about: false,
//   education: false,
//   experience: false,
// };

export const Home = () => (
  // const [modal, setModal] = useState(INITIAL_STATE);

  // const handleClick = (modalNum) => {
  //   switch (modalNum) {
  //     case 0:
  //       setModal({
  //         about: !modal.about,
  //         education: false,
  //         experience: false,
  //       });
  //       break;
  //     case 1:
  //       setModal({
  //         about: false,
  //         education: !modal.education,
  //         experience: false,
  //       });
  //       break;
  //     case 2:
  //       setModal({
  //         about: false,
  //         education: false,
  //         experience: !modal.experience,
  //       });
  //       break;
  //     default:
  //   }
  // };
  <Container>
    <Wrapper>
      <h1>Henrique Curzio Ladeira</h1>
      <Content>
        <p>
          I am a Software Engineer working in the computer software industry.
          Skilled in programming languages which mainly includes Javascript
          (React and Node), Python, PHP and C for embedded systems. Strong
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
          mind that one of the best way to consolidate your knowledge is by
          teaching.
        </p>
      </Content>
      <GitHubIcon />
      <LinkedinIcon />
    </Wrapper>
  </Container>
);
