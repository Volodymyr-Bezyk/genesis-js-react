import Hls from 'hls.js';
import { useRef, useEffect } from 'react';
import { VideoWrap, Video } from './MainVideoPlayer.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { constants } from 'constants/constants';
import { saveCoursesProgress } from 'utils/saveCoursesProgress';

const MainVideoPlayer = ({ courseId, lessons, activeLessonIdx, time }) => {
  const [coursesProgress, setCoursesProgress] = useLocalStorage(
    constants.LS_KEY
  );

  const videoRef = useRef();
  const hls = useRef(new Hls());
  const testVideo = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  useEffect(() => {
    hls.current.loadSource(lessons[activeLessonIdx].link ?? testVideo);
    hls.current.attachMedia(videoRef.current);
    videoRef.current.currentTime = time;
  }, [activeLessonIdx, lessons, time]);

  const handleSaveLessonProgress = e => {
    const { currentTime } = videoRef.current;
    const currentCourse = {
      courseId,
      lesson: {
        currentLesson: lessons[activeLessonIdx].id,
        activeLessonIdx,
        currentTime,
      },
    };
    saveCoursesProgress(coursesProgress, currentCourse, setCoursesProgress);
  };

  return (
    <VideoWrap>
      <Video
        ref={videoRef}
        controls
        preload="auto"
        onTimeUpdate={handleSaveLessonProgress}
      ></Video>
    </VideoWrap>
  );
};

export default MainVideoPlayer;

// if (progress && videoRef.current) {

//   // videoRef.current.play();
// }
