import styled from 'styled-components';

export const VideoWrap = styled.div`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  border-top: 1px solid ${p => p.theme.colors.border};
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    height: 302px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    height: 595px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    height: 960px;
  }
`;

export const LessonsTitle = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};
`;

export const LessonsWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: scroll;

  max-width: 348px;

  border-top: 1px solid ${p => p.theme.colors.logo};
  border-bottom: 1px solid ${p => p.theme.colors.logo};
  border-radius: ${p => p.theme.radii.badge};
  padding: ${p => p.theme.space[2]}px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    max-width: 528px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    max-width: 1040px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    max-width: 1680px;
  }
`;

export const LessonsBtnLeft = styled.button`
  position: absolute;
  top: 10px;
  left: 0;
  height: calc(100% - 20px);
  z-index: 10;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: rgba(82, 246, 7, 0.5);

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.badge};
  transition: ${p => p.theme.transitions.backgroundColor};

  svg {
    width: ${p => p.theme.iconSizes.s};
    height: ${p => p.theme.iconSizes.s};
  }

  :hover {
    background-color: rgba(246, 7, 236, 0.5);
  }
`;

export const LessonsBtnRight = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  height: calc(100% - 20px);
  z-index: 10;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: rgba(82, 246, 7, 0.5);

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.badge};
  transition: ${p => p.theme.transitions.backgroundColor};

  svg {
    width: ${p => p.theme.iconSizes.s};
    height: ${p => p.theme.iconSizes.s};
  }

  :hover {
    background-color: rgba(246, 7, 236, 0.5);
  }
`;

export const LessonsList = styled.ul`
  margin: -${p => p.theme.space[1]}px;

  display: flex;
  flex-wrap: nowrap;
`;
export const LessonsListItem = styled.li`
  margin: ${p => p.theme.space[1]}px;
  display: block;
  border-radius: ${p => p.theme.radii.badge};
  overflow: hidden;
`;
