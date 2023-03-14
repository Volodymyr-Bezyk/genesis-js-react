import styled from 'styled-components';

export const CoursesList = styled.ul`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]}px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin: -${p => p.theme.space[2]}px;
  }
`;
export const CoursesItem = styled.li`
  display: block;
  width: 100%;

  border: 1px solid ${p => p.theme.colors.course};
  border-radius: ${p => p.theme.radii.input};
  box-shadow: ${p => p.theme.shadows.card};
  overflow: hidden;

  @media (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]}px;
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    flex-basis: 100%;
    /* max-width: ${p => p.theme.screens.tablet}; */
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    margin: ${p => p.theme.space[2]}px;
    flex-basis: calc((100% - 32px) / 2);
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    margin: ${p => p.theme.space[2]}px;
    flex-basis: calc((100% - 48px) / 3);
  }
`;
