import { FaLock } from 'react-icons/fa';
import { GoPlay } from 'react-icons/go';

import {
  LessonWrap,
  LessonVideoWrap,
  AvailableLesson,
  LessonTitle,
  PlayBtn,
} from './LessonItem.styled';

const LessonItem = ({ lesson, idx, setActiveLessonIdx }) => {
  const { id, order, previewImageLink, duration, link, status, title } = lesson;

  //   console.log('lesson', idx);
  return (
    <>
      <LessonWrap>
        <LessonVideoWrap>
          <AvailableLesson>
            <source
              src="http://techslides.com/demos/sample-videos/small.webm"
              type="video/webm"
            />
          </AvailableLesson>
          <PlayBtn
            type="button"
            disabled={status === 'locked'}
            onClick={() => setActiveLessonIdx(idx)}
          >
            {status === 'locked' ? <FaLock /> : <GoPlay />}
          </PlayBtn>
        </LessonVideoWrap>
        <LessonTitle>{title}</LessonTitle>
      </LessonWrap>
    </>
  );
};

export default LessonItem;
