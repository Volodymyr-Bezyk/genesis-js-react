import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Hls from 'hls.js';

import PageWrap from 'components/PageWrap';
import CourseMainInfo from 'components/CourseMainInfo';
import Lessons from 'components/Lessons';

import { selectToken, selectProgress } from 'redux/selectors';
import { getOneCourseById } from 'utils/getOneCourseById';
import { updateProgress } from 'redux/lessonProgress/lessonProgressSlice';

import { getCurrentTimeToVideo } from 'utils/getCurrentTimeToVideo';

import { VideoWrap, Video } from './Course.styled';

const Course = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  const videoRef = useRef();
  const hls = useRef(new Hls());

  const token = useSelector(selectToken);
  const progress = useSelector(selectProgress);

  // console.log('progress', course);

  const testVideo = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

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

        if (progress && videoRef.current) {
          const currentTime = getCurrentTimeToVideo({
            courseId,
            lessonId: courseInfo.lessons[0].id,
            progress,
          });

          hls.current.loadSource(courseInfo.lessons[0].link ?? testVideo);
          hls.current.attachMedia(videoRef.current);
          videoRef.current.currentTime = currentTime;
          // videoRef.current.play();
        }

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
  }, [courseId, progress, token]);

  if (course) {
    // if (progress && videoRef.current) {
    //   const currentTime = getCurrentTimeToVideo({
    //     courseId,
    //     lessonId: courseInfo.lessons[activeLessonIdx].id,
    //     progress,
    //   });

    hls.current.loadSource(course.lessons[activeLessonIdx].link ?? testVideo);
    hls.current.attachMedia(videoRef.current);
  }

  if (isLoading) return;

  const handleSaveLessonProgress = e => {
    const { currentTime } = videoRef.current;
    dispatch(
      updateProgress({
        courseId,
        lessons: { [course.lessons[activeLessonIdx].id]: currentTime },
      })
    );
  };

  if (!course) return;
  const { title, launchDate, rating, lessons } = course;
  return (
    <PageWrap>
      <CourseMainInfo title={title} launchDate={launchDate} rating={rating} />

      <VideoWrap>
        <Video
          ref={videoRef}
          controls
          preload="auto"
          onPause={handleSaveLessonProgress}
        ></Video>
      </VideoWrap>

      <Lessons
        setActiveLessonIdx={setActiveLessonIdx}
        activeLessonIdx={activeLessonIdx}
        lessons={lessons}
      />
    </PageWrap>
  );
};

export default Course;
