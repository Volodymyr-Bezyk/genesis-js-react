import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllCourses } from 'redux/courses/operations';

import PageWrap from 'components/PageWrap';
import HomeBar from 'components/HomeBar';
import CourseCard from 'components/CourseCard';

import { CoursesList, CoursesItem } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAllCourses(controller));

    return () => {
      // controller.abort();
    };
  }, [dispatch]);

  return (
    <PageWrap>
      <HomeBar />
      <CoursesList>
        <CoursesItem>
          <CourseCard />
        </CoursesItem>

        <CoursesItem>
          <CourseCard />
        </CoursesItem>

        <CoursesItem>
          <CourseCard />
        </CoursesItem>

        <CoursesItem>
          <CourseCard />
        </CoursesItem>

        <CoursesItem>
          <CourseCard />
        </CoursesItem>
      </CoursesList>
    </PageWrap>
  );
};

export default Home;

// {
//   "id": "352be3c6-848b-4c19-9e7d-54fe68fef183",
//   "title": "Lack of Motivation & How to Overcome It",
//   "tags": [
//       "productivity"
//   ],
//   "launchDate": "2023-03-06T16:50:06.000Z",
//   "status": "launched",
//   "description": "Reignite your inner drive by managing factors that dampen your motivation.",
//   "duration": 521,
//   "lessonsCount": 2,
//   "containsLockedLessons": true,
//   "previewImageLink": "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it",
//   "rating": 3.5,
//   "meta": {
//       "slug": "lack-of-motivation-how-to-overcome-it",
//       "skills": [
//           "Aligning your goals with your motives",
//           "Overcoming decision paralysis",
//           "Reframing negative self-talk",
//           "Gaining clarity",
//           "Challenging yourself"
//       ],
//       "courseVideoPreview": {
//           "link": "https://wisey.app/videos/staying-focused-in-a-chaotic-world/preview/AppleHLS1/preview.m3u8",
//           "duration": 27,
//           "previewImageLink": "https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview"
//       }
//   }
// },

// https://wisey.app/videos/staying-focused-in-a-chaotic-world/preview/AppleHLS1/preview.m3u8
