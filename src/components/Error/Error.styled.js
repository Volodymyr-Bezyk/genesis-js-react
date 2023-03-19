import styled from 'styled-components';

export const ErrorWrap = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;
export const ErrorTitle = styled.h2`
  color: rgba(217, 19, 48, 0.8);
`;

export const ErrorText = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: rgba(217, 19, 48, 0.8);
`;
