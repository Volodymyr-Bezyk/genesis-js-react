import styled from 'styled-components';

export const LayoutWrap = styled.div`
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;
  }
`;
