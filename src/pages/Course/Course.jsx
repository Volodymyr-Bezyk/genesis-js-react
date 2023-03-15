import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Hls from 'hls.js';
import { getOneCourseById } from 'utils/getOneCourseById';

import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';
import LessonItem from 'components/LessonItem';

import {
  VideoWrap,
  Video,
  LessonsTitle,
  LessonsWrap,
  LessonsList,
  LessonsListItem,
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
    // console.log('INSIDE videoRef.current', videoRef.current);
    // console.log('activeLessonIdx', activeLessonIdx);
    // console.log('link', course.lessons[activeLessonIdx].link);
    hls.current.loadSource(course.lessons[activeLessonIdx].link);
    hls.current.attachMedia(videoRef.current);
  }

  if (isLoading) return;

  return (
    <PageWrap>
      {course?.title && <PageTitle title={course.title} />}
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
