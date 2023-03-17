import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;
