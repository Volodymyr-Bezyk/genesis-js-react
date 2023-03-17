import styled from 'styled-components';

export const DashboardTitle = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const DashboardTextInfo = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.primaryLink};
`;
