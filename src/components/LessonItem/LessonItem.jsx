import PropTypes from 'prop-types';
import { FaLock } from 'react-icons/fa';
import { GoPlay } from 'react-icons/go';
import { ImCheckboxChecked } from 'react-icons/im';
import Box from 'components/Box';

import {
  LessonWrap,
  LessonVideoWrap,
  AvailableLesson,
  LessonTitle,
  PlayBtn,
  LessonDuration,
} from './LessonItem.styled';

const LessonItem = ({ lesson, idx, setActiveLessonIdx, activeLessonIdx }) => {
  const { status, title, previewImageLink, order, duration } = lesson;

  return (
    <>
      <LessonWrap>
        <LessonVideoWrap current={activeLessonIdx === idx}>
          <AvailableLesson
            poster={`${previewImageLink}/lesson-${order}.webp`}
          ></AvailableLesson>
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <LessonTitle>{title}</LessonTitle>
          <LessonDuration>{Math.round(+duration / 60)} m</LessonDuration>
        </Box>
      </LessonWrap>
    </>
  );
};

export default LessonItem;

LessonItem.propTypes = {
  lesson: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  setActiveLessonIdx: PropTypes.func.isRequired,
  activeLessonIdx: PropTypes.number.isRequired,
};
