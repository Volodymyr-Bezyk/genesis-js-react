import styled from 'styled-components';

export const MobileMenuWrap = styled.header`
  padding: 16px 0;
`;

export const LogoText = styled.span`
  margin-left: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.primaryText};
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileMenuBtn = styled.button`
  font-family: inherit;
  border: none;
  background-color: ${p => p.theme.colors.transparent};
`;

export const MobileNav = styled.nav`
  /* padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px; */
  padding: ${p => p.theme.space[4]}px 0;
`;
