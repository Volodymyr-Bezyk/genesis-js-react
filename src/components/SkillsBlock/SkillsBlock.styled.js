import styled from 'styled-components';

export const AddInfoBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};

  svg {
    color: ${p => p.theme.colors.primaryIcon};
    width: ${p => p.theme.iconSizes.m};
    height: ${p => p.theme.iconSizes.m};

    transition: ${p => p.theme.transitions.color};
  }

  :hover {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;

export const AddInfoBlockWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.badge};
  transition: ${p => p.theme.transitions.transform};

  transform: translateY(100%);
  transform: ${p => (p.skillsShown ? 'translateY(0)' : 'translateY(100%)')};
`;

export const AddInfoCloseBtn = styled.button`
  display: block;
  margin-left: auto;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};

  svg {
    color: ${p => p.theme.colors.title};
    width: ${p => p.theme.iconSizes.s};
    height: ${p => p.theme.iconSizes.s};

    transition: ${p => p.theme.transitions.color};
  }

  :hover {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;

export const AddInfoTitle = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[7]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};
`;

export const AddInfoList = styled.ul``;

export const AddInfoItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[1]}px;
  }

  svg {
    color: ${p => p.theme.colors.primaryIcon};
    width: ${p => p.theme.iconSizes.xs};
    height: ${p => p.theme.iconSizes.xs};
  }
`;
