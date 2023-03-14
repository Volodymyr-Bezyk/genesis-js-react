import styled from 'styled-components';

export const LayoutWrap = styled.div`
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;
  }
`;
export const MainContent = styled.main`
  @media (min-width: ${p => p.theme.screens.tablet}) {
    flex-grow: 1;
  }
`;
