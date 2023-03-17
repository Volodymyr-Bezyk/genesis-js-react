import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgWrap = styled.div`
  position: relative;
`;

export const NotFoundImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
`;

export const GoToCoursesLink = styled(Link)`
  position: absolute;
  top: 80%;
  left: 50%;

  transform: translateX(-50%);

  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.14;
  color: ${p => p.theme.colors.title};

  border-radius: ${p => p.theme.radii.input};
  border: 2px solid ${p => p.theme.colors.logo};

  transition: ${p => p.theme.transitions.color},
    ${p => p.theme.transitions.backgroundColor};

  :hover {
    color: ${p => p.theme.colors.primaryIcon};
    background-color: rgba(246, 231, 7, 0.2);
  }
`;
