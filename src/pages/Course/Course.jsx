import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Hls from 'hls.js';
import { BsStarFill } from 'react-icons/bs';
import { getOneCourseById } from 'utils/getOneCourseById';
import axios from 'axios';
import { setAuthHeader } from 'utils/setAndCleanHeaders';

import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';
import LessonItem from 'components/LessonItem';
import Box from 'components/Box';
import { dateFormatter } from 'utils/dateFormatter';

import {
  VideoWrap,
  Video,
  LessonsTitle,
  LessonsWrap,
  LessonsList,
  LessonsListItem,
  RatingWrap,
} from './Course.styled';

const Course = () => {
  const { courseId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const videoRef = useRef();
  const hls = useRef(new Hls());

  useEffect(() => {
    const controller = new AbortController();

    const getCourse = async () => {
      try {
        setLoading(true);
        // TODO: Коду із отриманням токена тут бути не повинно,
        // оскільки його ми отримуємо після реєстрації або логіну, просто не хочу змушувати Вас реєструватися
        const {
          data: { token },
        } = await axios.get('/auth/anonymous?platform=subscriptions');
        setAuthHeader(token);

        const courseInfo = await getOneCourseById(controller, courseId);
        setCourse(courseInfo);
        setLoading(false);
        return courseInfo;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getCourse();

    return () => {
      controller.abort();
    };
  }, [courseId]);

  if (course) {
    const testVideo = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    hls.current.loadSource(course.lessons[activeLessonIdx].link ?? testVideo);
    hls.current.attachMedia(videoRef.current);
  }

  if (isLoading) return;

  return (
    <PageWrap>
      {course?.title && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <PageTitle title={course.title} />

          {course.rating && (
            <RatingWrap stars={Math.round(course.rating)}>
              <LessonsTitle>Rating:</LessonsTitle>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </Box>
            </RatingWrap>
          )}
          {course.launchDate && (
            <LessonsTitle>
              Added: {dateFormatter(course.launchDate)}
            </LessonsTitle>
          )}
        </Box>
      )}
      <VideoWrap>
        <Video ref={videoRef} controls preload="auto"></Video>
      </VideoWrap>
      {course && (
        <>
          <LessonsTitle>
            Lessons in this course: {course.lessons.length}
          </LessonsTitle>

          <LessonsWrap>
            <LessonsList>
              {course.lessons.map((lesson, idx) => (
                <LessonsListItem key={lesson.id}>
                  <LessonItem
                    lesson={lesson}
                    idx={idx}
                    setActiveLessonIdx={setActiveLessonIdx}
                    activeLessonIdx={activeLessonIdx}
                  />
                </LessonsListItem>
              ))}
            </LessonsList>
          </LessonsWrap>
        </>
      )}
    </PageWrap>
  );
};

export default Course;
