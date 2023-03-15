import styled from 'styled-components';

export const LessonWrap = styled.div`
  width: 100%;
`;

export const LessonVideoWrap = styled.div`
  position: relative;
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

  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

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

export const PlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: rgba(246, 231, 7, 0.5);

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.badge};
  transition: ${p => p.theme.transitions.backgroundColor};

  svg {
    width: ${p => p.theme.iconSizes.s};
    height: ${p => p.theme.iconSizes.s};
    color: rgba(246, 7, 22, 0.7);
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 50px;
    height: 50px;
    svg {
      width: ${p => p.theme.iconSizes.sm};
      height: ${p => p.theme.iconSizes.sm};
    }
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 60px;
    height: 60px;
    svg {
      width: ${p => p.theme.iconSizes.m};
      height: ${p => p.theme.iconSizes.m};
    }
  }
`;
