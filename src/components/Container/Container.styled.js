import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  margin: 0 auto;

  @media (min-width: ${p => p.theme.screens.mobile}) {
    max-width: ${p => p.theme.screens.mobile};
  }
  @media (min-width: ${p => p.theme.screens.tablet}) {
    max-width: ${p => p.theme.screens.tablet};
    padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]}px;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    max-width: ${p => p.theme.screens.desktop};
    padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  }
`;
