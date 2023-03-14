import PageWrap from 'components/PageWrap';
import HomeBar from 'components/HomeBar';
import SkillsBlock from 'components/SkillsBlock';
import {
  CoursesList,
  CoursesItem,
  CourseCardWrap,
  CoursesTitle,
  VideoWrap,
  Video,
  CoursesText,
  LessonsRatingList,
  LessonsRatingItem,
  LessonsRatingValue,
  LessonsRatingDesc,
} from './Home.styled';

const Home = () => {
  return (
    <PageWrap>
      <HomeBar />
      <CoursesList>
        <CoursesItem>
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
                  <LessonsRatingDesc>Count</LessonsRatingDesc>
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
