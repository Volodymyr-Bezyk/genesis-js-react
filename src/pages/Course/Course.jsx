import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FcNext, FcPrevious } from 'react-icons/fc';

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
  LessonsBtnLeft,
  LessonsBtnRight,
} from './Course.styled';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);

  console.log('activeLessonIdx', activeLessonIdx);

  useEffect(() => {
    const controller = new AbortController();
    const getCourseById = async (controller, id) => {
      try {
        const response = await axios.get(`/${id}`, {
          signal: controller.signal,
        });
        setCourse(response.data);
        return response.data;
      } catch (error) {}
    };
    getCourseById(controller, courseId);

    return () => {
      controller.abort();
    };
  }, [courseId]);

  if (!course) return;
  const { title, lessons, previewImageLink } = course;

  return (
    <PageWrap>
      <PageTitle title={title} />
      <VideoWrap>
        <Video
          poster={previewImageLink + '/cover.webp'}
          controls
          preload="metadata"
          crossorigin
        >
          <source
            src="http://techslides.com/demos/sample-videos/small.webm"
            type="video/webm"
          />
        </Video>
      </VideoWrap>
      <LessonsTitle>Lessons in this course: {lessons.length}</LessonsTitle>

      <LessonsWrap>
        <LessonsBtnLeft type="button">
          <FcPrevious />
        </LessonsBtnLeft>
        <LessonsList>
          {lessons.map((lesson, idx) => (
            <LessonsListItem key={lesson.id}>
              <LessonItem
                lesson={lesson}
                idx={idx}
                setActiveLessonIdx={setActiveLessonIdx}
              />
            </LessonsListItem>
          ))}
        </LessonsList>
        <LessonsBtnRight type="button">
          <FcNext />
        </LessonsBtnRight>
      </LessonsWrap>
    </PageWrap>
  );
};

export default Course;
