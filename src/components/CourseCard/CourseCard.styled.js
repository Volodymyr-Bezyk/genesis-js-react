import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CourseCardWrap = styled.div`
  position: relative;
  overflow: hidden;
`;
export const CoursesTitle = styled.h3`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};
`;

export const VideoLink = styled(Link)`
  position: relative;
  display: block;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  height: 197px;
  object-fit: cover;
  object-position: 1px 1px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    height: 300px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    height: 292px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    height: 313px;
  }
`;

export const CoursesText = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[4]}px;
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

export const LoadedDateWrap = styled.div`
  display: none;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
    position: absolute;
    bottom: 5px;
    left: 5px;
    text-align: right;
  }
`;

export const LoadedDateText = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1;
  color: ${p => p.theme.colors.primaryIcon};
`;
