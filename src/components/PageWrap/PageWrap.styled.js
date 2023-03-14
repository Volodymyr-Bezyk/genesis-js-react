import styled from 'styled-components';

export const PageWrapper = styled.div`
  @media (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  }
`;
