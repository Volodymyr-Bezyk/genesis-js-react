import { FaLock } from 'react-icons/fa';
import { GoPlay } from 'react-icons/go';
import { ImCheckboxChecked } from 'react-icons/im';

import {
  LessonWrap,
  LessonVideoWrap,
  AvailableLesson,
  LessonTitle,
  PlayBtn,
} from './LessonItem.styled';

const LessonItem = ({ lesson, idx, setActiveLessonIdx, activeLessonIdx }) => {
  const { id, order, previewImageLink, duration, link, status, title } = lesson;

  //   console.log('link', `${previewImageLink}/${order}.webp`);
  return (
    <>
      <LessonWrap>
        <LessonVideoWrap current={activeLessonIdx === idx}>
          <AvailableLesson>
            {/* <source
              src="http://techslides.com/demos/sample-videos/small.webm"
              type="video/webm"
            /> */}
          </AvailableLesson>
          <PlayBtn
            type="button"
            disabled={status === 'locked'}
            onClick={() => setActiveLessonIdx(idx)}
          >
            {activeLessonIdx !== idx && status === 'locked' && <FaLock />}
            {activeLessonIdx !== idx && status === 'unlocked' && <GoPlay />}
            {activeLessonIdx === idx && (
              <ImCheckboxChecked color="rgba(57, 246, 7, 0.85)" />
            )}
          </PlayBtn>
        </LessonVideoWrap>
        <LessonTitle>{title}</LessonTitle>
      </LessonWrap>
    </>
  );
};

export default LessonItem;
