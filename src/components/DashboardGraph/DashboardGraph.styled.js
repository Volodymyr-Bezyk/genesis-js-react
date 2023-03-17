import styled from 'styled-components';

export const GraphList = styled.ul`
  @media (min-width: ${p => p.theme.screens.desktop}) {
    display: flex;
    margin: -${p => p.theme.space[2]}px;
  }
`;

export const GraphItem = styled.li`
  display: block;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.badge};
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${p => p.theme.colors.border};

  transition: ${p => p.theme.transitions.borderColor};
  :hover {
    border-color: ${p => p.theme.colors.hover};
  }

  @media (max-width: 1279px) {
    :not(:last-child) {
      margin-bottom: ${p => p.theme.space[2]}px;
    }
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    display: flex;
    margin: ${p => p.theme.space[2]}px;
    flex-basis: calc((100% - 32px) / 3);
  }
`;
export const GraphImg = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;

  transition: ${p => p.theme.transitions.transform};
  :hover {
    transform: scale(1.2);
    perspective: 400px;
  }
`;
