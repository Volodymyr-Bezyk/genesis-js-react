import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PageWrap from 'components/PageWrap';
import CourseMainInfo from 'components/CourseMainInfo';
import Lessons from 'components/Lessons';
import MainVideoPlayer from 'components/MainVideoPlayer';

import { selectToken } from 'redux/selectors';
import { getOneCourseById } from 'utils/getOneCourseById';
import { constants } from 'constants/constants';
import { useLocalStorageOneTime } from 'hooks/useLocalStorage';

const Course = () => {
  const { courseId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [idx, time] = useLocalStorageOneTime(constants.LS_KEY, courseId);
  const [activeLessonIdx, setActiveLessonIdx] = useState(idx);
  const token = useSelector(selectToken);

  useEffect(() => {
    const controller = new AbortController();
    const getCourse = async () => {
      try {
        setLoading(true);

        const courseInfo = await getOneCourseById(
          { token, controller },
          courseId
        );
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
  }, [courseId, token]);

  if (!course || isLoading) return;
  const { id, title, launchDate, rating, lessons } = course;

  return (
    <PageWrap>
      <CourseMainInfo title={title} launchDate={launchDate} rating={rating} />
      <MainVideoPlayer
        lessons={lessons}
        activeLessonIdx={activeLessonIdx}
        time={time}
        courseId={id}
      />
      <Lessons
        setActiveLessonIdx={setActiveLessonIdx}
        activeLessonIdx={activeLessonIdx}
        lessons={lessons}
      />
    </PageWrap>
  );
};

export default Course;
