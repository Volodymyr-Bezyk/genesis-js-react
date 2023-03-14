import styled from 'styled-components';

export const SkillsListText = styled.span`
  margin-left: ${p => p.theme.space[2]}px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.primaryLink};
`;
