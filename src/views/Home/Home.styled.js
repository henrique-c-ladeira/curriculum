import styled from 'styled-components';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  align-items: baseline;

  margin-top: ${metrics.largerMargin};
  padding: ${metrics.basePadding};
  border-radius: ${metrics.baseBorderRadius};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  position: relative;

  max-width: 700px;

  color: ${colors.primaryText};

  /* background-color: ${colors.light}; */

  &:before {
    border-radius: ${metrics.baseBorderRadius};
    content: '';
    background-color: ${colors.primary};
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.15;
    z-index: -1;
  }

  h1 {
    font-family: 'Righteous';
    margin-bottom: ${metrics.baseMargin};
  }
`;

export const Content = styled.div`
  margin-bottom: ${metrics.baseMargin};

  p {
    font-size: ${fonts.medium};
    margin-bottom: ${metrics.paragraphMargin};

    text-align: justify;
    text-indent: ${metrics.paragraph};
  }
`;
