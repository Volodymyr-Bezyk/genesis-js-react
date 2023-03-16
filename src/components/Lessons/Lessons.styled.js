import styled from 'styled-components';

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
