import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const MobileLinkText = styled.span`
  margin-left: ${p => p.theme.space[3]}px;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[7]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.primaryLink};
`;
