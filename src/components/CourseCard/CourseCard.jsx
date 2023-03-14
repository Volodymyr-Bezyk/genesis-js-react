import SkillsBlock from 'components/SkillsBlock';

import {
  CourseCardWrap,
  CoursesTitle,
  VideoWrap,
  Video,
  CoursesText,
  LessonsRatingList,
  LessonsRatingItem,
  LessonsRatingValue,
  LessonsRatingDesc,
} from './CourseCard.styled';

const CourseCard = () => {
  return (
    <CourseCardWrap>
      <CoursesTitle>Lack of Motivation & How to Overcome It</CoursesTitle>
      <VideoWrap>
        <Video
          poster="https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/cover.webp"
          controls
        >
          <source
            src="http://techslides.com/demos/sample-videos/small.webm"
            type="video/webm"
          />
        </Video>
        <LessonsRatingList>
          <LessonsRatingItem>
            <LessonsRatingValue>2</LessonsRatingValue>
            <LessonsRatingDesc>Lessons</LessonsRatingDesc>
          </LessonsRatingItem>
          <LessonsRatingItem>
            <LessonsRatingValue>3.5</LessonsRatingValue>
            <LessonsRatingDesc>Rating</LessonsRatingDesc>
          </LessonsRatingItem>
        </LessonsRatingList>
      </VideoWrap>
      <CoursesText>
        Reignite your inner drive by managing factors that dampen your
        motivation.
      </CoursesText>
      <SkillsBlock />
    </CourseCardWrap>
  );
};

export default CourseCard;
