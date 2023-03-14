import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  svg {
    color: ${p => p.theme.colors.primaryLink};
    width: ${p => p.theme.iconSizes.m};
    height: ${p => p.theme.iconSizes.m};

    transition: ${p => p.theme.transitions.color};
  }

  :hover:not(.active),
  :focus:not(.active) {
    span {
      color: ${p => p.theme.colors.hover};
    }
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }

  &.active {
    span {
      color: ${p => p.theme.colors.primaryIcon};
    }
    svg {
      color: ${p => p.theme.colors.primaryIcon};
    }
  }
`;

export const MenuLinkText = styled.span`
  margin-left: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[7]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.primaryLink};
  transition: ${p => p.theme.transitions.color};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;
