import { GiGraduateCap } from 'react-icons/gi';
import { GoBeaker, GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { IoIosContact } from 'react-icons/io';
import { SiBlender } from 'react-icons/si';
import { FaReadme, FaCertificate } from 'react-icons/fa';
import {
  DiPhotoshop,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiGit,
  DiPython,
  DiLinux,
} from 'react-icons/di';
import { BiMailSend } from 'react-icons/bi';

import styled, { css } from 'styled-components';

import { colors, fonts, metrics } from '../styles';

const baseIconStyle = css`
  font-size: ${fonts.iconRegular};
  margin: ${metrics.smallMargin};
  transition: 0.3s ease-out;

  &:hover {
    color: ${colors.primary};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const PhotoshopIcon = styled(DiPhotoshop)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const MailIcon = styled(BiMailSend)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const CertificateIcon = styled(FaCertificate)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const CourseIcon = styled(FaReadme)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const ReactIcon = styled(DiReact)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const NodeIcon = styled(DiNodejsSmall)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const PhpIcon = styled(DiPhp)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const GitIcon = styled(DiGit)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const PythonIcon = styled(DiPython)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const LinuxIcon = styled(DiLinux)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const BlenderIcon = styled(SiBlender)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const GitHubIcon = styled(GoMarkGithub)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const LinkedinIcon = styled(GrLinkedin)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const ResearchIcon = styled(GoBeaker)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const GraduationHatIcon = styled(GiGraduateCap)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const AboutIcon = styled(IoIosContact)`
  ${(props) => (props.noStyle ? null : baseIconStyle)}
`;

export const TinyText = styled.span`
  font-size: ${fonts.tiny};
`;
