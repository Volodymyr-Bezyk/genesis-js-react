import Hls from 'hls.js';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProgress } from 'redux/lessonProgress/lessonProgressSlice';
import { VideoWrap, Video } from './MainVideoPlayer.styled';
// import { getCurrentTimeToVideo } from 'utils/getCurrentTimeToVideo';

const MainVideoPlayer = ({ courseId, lessons, activeLessonIdx }) => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const hls = useRef(new Hls());
  const testVideo = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  useEffect(() => {
    hls.current.loadSource(lessons[activeLessonIdx].link ?? testVideo);
    hls.current.attachMedia(videoRef.current);
  }, [activeLessonIdx, lessons]);

  const handleSaveLessonProgress = e => {
    const { currentTime } = videoRef.current;
    dispatch(
      updateProgress({
        courseId,
        lessons: { [lessons[activeLessonIdx].id]: currentTime },
      })
    );
  };

  return (
    <VideoWrap>
      <Video
        ref={videoRef}
        controls
        preload="auto"
        onPause={handleSaveLessonProgress}
      ></Video>
    </VideoWrap>
  );
};

export default MainVideoPlayer;

// if (progress && videoRef.current) {
//   const currentTime = getCurrentTimeToVideo({
//     courseId,
//     lessonId: courseInfo.lessons[0].id,
//     progress,
//   });

//   hls.current.loadSource(courseInfo.lessons[0].link ?? testVideo);
//   hls.current.attachMedia(videoRef.current);
//   videoRef.current.currentTime = currentTime;
//   // videoRef.current.play();
// }
