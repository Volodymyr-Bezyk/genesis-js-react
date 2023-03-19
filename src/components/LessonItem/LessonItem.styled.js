import styled from 'styled-components';

export const LessonWrap = styled.div`
  width: 100%;
`;

export const LessonVideoWrap = styled.div`
  position: relative;
  transition: ${p => p.theme.transitions.borderColor};
`;

export const AvailableLesson = styled.video`
  display: block;
  object-fit: cover;
  max-width: 200px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    max-width: 250px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    max-width: 300px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    max-width: 350px;
  }
`;

export const LessonTitle = styled.p`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.primaryLink};

  max-width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    max-width: 200px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    max-width: 250px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    max-width: 260px;
  }
`;

export const PlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgba(246, 231, 7, 0.2);

  border-radius: ${p => p.theme.radii.badge};
  transition: ${p => p.theme.transitions.backgroundColor};

  svg {
    width: ${p => p.theme.iconSizes.s};
    height: ${p => p.theme.iconSizes.s};
    color: rgba(246, 7, 22, 0.7);
    transition: ${p => p.theme.transitions.color};
  }

  :hover {
    svg {
      color: rgba(57, 246, 7, 0.85);
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    svg {
      width: ${p => p.theme.iconSizes.sm};
      height: ${p => p.theme.iconSizes.sm};
    }
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    svg {
      width: ${p => p.theme.iconSizes.xl};
      height: ${p => p.theme.iconSizes.xl};
    }
  }
`;

export const LessonDuration = styled.p`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[4]}px;
  color: ${p => p.theme.colors.primaryLink};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
`;
