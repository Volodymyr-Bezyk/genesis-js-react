import styled from 'styled-components';

export const HomeBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const SearchLabel = styled.label`
  display: none;

  :focus-within {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
    position: relative;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    color: ${p => p.theme.colors.userEmail};
    transition: ${p => p.theme.transitions.color};
  }
`;

export const SearchInput = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  width: 200px;

  border-radius: ${p => p.theme.radii.input};
  background-color: ${p => p.theme.colors.border};
  outline: none;
  border: 1px solid ${p => p.theme.colors.transparent};
  transition: ${p => p.theme.transitions.borderColor};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.14;
  color: ${p => p.theme.colors.userEmail};

  :focus {
    border-color: ${p => p.theme.colors.hover};
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 440px;
  }
`;

export const UserInfo = styled.div`
  display: none;
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
`;
export const UserName = styled.div`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.userName};

  @media (min-width: ${p => p.theme.screens.desktop}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;
export const UserEmail = styled.div`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.userEmail};

  @media (min-width: ${p => p.theme.screens.desktop}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;
