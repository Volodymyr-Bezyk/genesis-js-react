import PropTypes from 'prop-types';
import Hls from 'hls.js';
import toast from 'react-hot-toast';
import { useRef, useEffect } from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { constants } from 'constants/constants';
import { saveCoursesProgress } from 'utils/saveCoursesProgress';
import PlayerHints from 'components/PlayerHints';

import { VideoWrap, Video, PlayerWrap } from './MainVideoPlayer.styled';

const MainVideoPlayer = ({ courseId, lessons, activeLessonIdx, time }) => {
  const [coursesProgress, setCoursesProgress] = useLocalStorage(
    constants.LS_KEY
  );

  const playbackRate = useRef(1);
  const videoRef = useRef(null);
  const hls = useRef(new Hls());

  const testVideo = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  useEffect(() => {
    hls.current.loadSource(lessons[activeLessonIdx].link ?? testVideo);
    hls.current.attachMedia(videoRef.current);
    videoRef.current.currentTime = time;
  }, [activeLessonIdx, lessons, time]);

  const handleSaveLessonProgress = e => {
    if (videoRef) {
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
    }
  };

  const handleKeyDown = async e => {
    if (e.key === '+') {
      playbackRate.current = Math.min(playbackRate.current + 0.25, 2);
      videoRef.current.playbackRate = playbackRate.current;
      toast.success(
        playbackRate.current === 2
          ? `playback speed: ${playbackRate.current}. This is max speed.`
          : `playback speed: ${playbackRate.current}`
      );
    }
    if (e.key === '-') {
      playbackRate.current = Math.max(playbackRate.current - 0.25, 0.25);
      videoRef.current.playbackRate = playbackRate.current;
      toast.success(
        playbackRate.current === 0.25
          ? `playback speed: ${playbackRate.current}. This is min speed.`
          : `playback speed: ${playbackRate.current}`
      );
    }
  };

  return (
    <VideoWrap onKeyDown={handleKeyDown}>
      <PlayerHints videoRef={videoRef} />
      <PlayerWrap>
        <Video
          ref={videoRef}
          controls={true}
          preload="none"
          autoPlay={false}
          onTimeUpdate={handleSaveLessonProgress}
        />
      </PlayerWrap>
    </VideoWrap>
  );
};

export default MainVideoPlayer;

MainVideoPlayer.propTypes = {
  courseId: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
  activeLessonIdx: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};
