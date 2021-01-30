import { GiGraduateCap } from 'react-icons/gi';
import { GoBeaker, GoMarkGithub } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { IoIosContact } from 'react-icons/io';
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
