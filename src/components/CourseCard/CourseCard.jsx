import SkillsBlock from 'components/SkillsBlock';

import {
  CourseCardWrap,
  CoursesTitle,
  VideoLink,
  Video,
  CoursesText,
  LessonsRatingList,
  LessonsRatingItem,
  LessonsRatingValue,
  LessonsRatingDesc,
} from './CourseCard.styled';

const CourseCard = ({ course }) => {
  const {
    id,
    title,
    previewImageLink,
    description,
    duration,
    lessonsCount,
    rating,
    tags,
    meta: { courseVideoPreview, skills },
  } = course;

  return (
    <CourseCardWrap>
      <CoursesTitle>{title}</CoursesTitle>
      <VideoLink to={`course/${id}`}>
        <Video poster={previewImageLink + '/cover.webp'}>
          <source src={courseVideoPreview?.link} type="video/webm" />
        </Video>
        <LessonsRatingList>
          <LessonsRatingItem>
            <LessonsRatingValue>{lessonsCount}</LessonsRatingValue>
            <LessonsRatingDesc>Lessons</LessonsRatingDesc>
          </LessonsRatingItem>
          <LessonsRatingItem>
            <LessonsRatingValue>{rating}</LessonsRatingValue>
            <LessonsRatingDesc>Rating</LessonsRatingDesc>
          </LessonsRatingItem>
          <LessonsRatingItem>
            <LessonsRatingValue>
              {Math.round(+duration / 60)}
            </LessonsRatingValue>
            <LessonsRatingDesc>Hours</LessonsRatingDesc>
          </LessonsRatingItem>
        </LessonsRatingList>
      </VideoLink>
      <CoursesText>{description}</CoursesText>
      <SkillsBlock skills={skills} tags={tags} />
    </CourseCardWrap>
  );
};

export default CourseCard;
