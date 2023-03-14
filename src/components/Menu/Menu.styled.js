import styled from 'styled-components';

export const MenuWrap = styled.header`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    border-right: 1px solid ${p => p.theme.colors.border};
    padding-right: ${p => p.theme.space[4]}px;
  } ;
`;

export const LogoText = styled.span`
  margin-left: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.title};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const MenuBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${p => p.theme.colors.logo};
    width: ${p => p.theme.iconSizes.ml};
    height: ${p => p.theme.iconSizes.ml};
  }
`;

export const MobileMenuOpenBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};

  svg {
    color: ${p => p.theme.colors.primaryText};
    width: ${p => p.theme.iconSizes.xl};
    height: ${p => p.theme.iconSizes.xl};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

export const NavWrap = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.colors.white};
    transition: ${p => p.theme.transitions.transform},
      ${p => p.theme.transitions.opacity};

    transform: ${p => (p.showMenu ? 'translateX(0)' : ' translateX(100%)')};
    opacity: ${p => (p.showMenu ? 1 : 0)};
  }
`;

export const Nav = styled.nav`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;

  @media (max-width: 767px) {
    width: ${p => p.theme.screens.mobile};
  }
  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]}px;
  }
`;

export const MobileMenuCloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};

  svg {
    color: ${p => p.theme.colors.primaryText};
    width: ${p => p.theme.iconSizes.xl};
    height: ${p => p.theme.iconSizes.xl};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};

  svg {
    color: ${p => p.theme.colors.primaryLink};
    width: ${p => p.theme.iconSizes.m};
    height: ${p => p.theme.iconSizes.m};

    transition: ${p => p.theme.transitions.color};
  }

  :hover {
    span {
      color: ${p => p.theme.colors.hover};
    }
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;

export const LogoutBtnText = styled.span`
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
