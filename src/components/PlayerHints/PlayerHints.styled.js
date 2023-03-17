import styled from 'styled-components';

export const HintsWrap = styled.div`
  display: none;

  @media (min-width: ${p => p.theme.screens.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Hint = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.badge};
  border: 2px solid ${p => p.theme.colors.badge};
`;

export const HintTitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.title};
`;

export const HintText = styled.span`
  margin-left: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.primaryLink};
`;
