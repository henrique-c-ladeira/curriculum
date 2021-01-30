import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const NavBar = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  gap: ${metrics.baseGap};

  background: ${colors.backgroundGradient};
  background-color: ${colors.dark};
  opacity: 0.95;

  box-shadow: 1px 1px 1px ${colors.primaryDark};
`;

export const NavItem = styled.div`
  margin: ${metrics.baseMargin};
  padding: ${metrics.smallPadding} ${metrics.basePadding};
  border-radius: ${metrics.tinyBorderRadius};

  position: relative;

  cursor: pointer;
  user-select: none;
  box-shadow: 1px ${colors.primaryDark};

  font-size: ${fonts.regular};

  background-color: transparent;
  color: ${colors.primaryText};

  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
    background-color: ${colors.primaryDark};
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px ${colors.primary};
  margin: ${metrics.baseMargin};
  width: 100px;
  transition: 0.3s ease-out;

  &:hover {
    box-shadow: 0px 0px 15px 15px ${colors.primary};
  }
`;
