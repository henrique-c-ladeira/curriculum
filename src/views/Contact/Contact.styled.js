import styled from 'styled-components';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: ${metrics.largerMargin};
  padding: ${metrics.basePadding};
  border-radius: ${metrics.baseBorderRadius};

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-items: baseline;

  justify-content: space-around;

  position: relative;

  width: 100%;

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
  width: 100%;
  margin-bottom: ${metrics.baseMargin};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

  margin-bottom: ${metrics.largerMargin};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  img {
    border-radius: 30%;

    position: absolute;

    width: 150px;
    z-index: -1;
    right: 0;
    opacity: 0.25;
  }

  h1 {
    margin-bottom: ${metrics.paragraphMargin};

    text-align: justify;
    text-indent: ${metrics.paragraph};
  }
  p {
    margin-bottom: ${metrics.paragraphMargin};

    text-align: justify;
    text-indent: ${metrics.paragraph};
  }

  desc {
    text-align: right;
    font-size: ${fonts.small};
  }
`;
