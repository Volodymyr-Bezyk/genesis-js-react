import { useRef } from 'react';
import { useEffect, useState } from 'react';
import Hls from 'hls.js';
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

  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const hls = useRef(new Hls());
  const test = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  useEffect(() => {
    hls.current.loadSource(courseVideoPreview?.link ?? test);

    hls.current.attachMedia(videoRef.current);
  }, [courseVideoPreview?.link, isHovering]);

  return (
    <CourseCardWrap>
      <CoursesTitle>{title}</CoursesTitle>
      <VideoLink to={`course/${id}`}>
        <Video
          poster={previewImageLink + '/cover.webp'}
          ref={videoRef}
          muted
          preload="auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          autoPlay={isHovering}
        ></Video>
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
              {Math.round(+duration / 3600)}
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
