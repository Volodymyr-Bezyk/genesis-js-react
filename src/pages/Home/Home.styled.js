import styled from 'styled-components';

export const CoursesList = styled.ul`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]}px;
`;
export const CoursesItem = styled.li`
  display: block;
  width: 100%;
  max-width: ${p => p.theme.screens.mobile};

  border: 1px solid ${p => p.theme.colors.course};
  border-radius: ${p => p.theme.radii.input};
  box-shadow: ${p => p.theme.shadows.card};
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const CourseCardWrap = styled.div`
  position: relative;
  overflow: hidden;
`;
export const CoursesTitle = styled.h3`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};
`;

export const VideoWrap = styled.div`
  position: relative;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  max-width: ${p => p.theme.screens.mobile};
`;

export const CoursesText = styled.p`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.primaryLink};
`;

export const LessonsRatingList = styled.ul`
  position: absolute;
  top: 5px;
  left: 5px;

  background-color: ${p => p.theme.colors.badge};
  border-radius: ${p => p.theme.radii.badge};

  display: flex;
`;
export const LessonsRatingItem = styled.li`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.delimetr};
  }
`;
export const LessonsRatingValue = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1;
  color: ${p => p.theme.colors.title};
`;
export const LessonsRatingDesc = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 1;
  color: ${p => p.theme.colors.primaryLink};
`;
