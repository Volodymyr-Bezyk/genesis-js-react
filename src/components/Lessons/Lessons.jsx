import PropTypes from 'prop-types';
import LessonItem from 'components/LessonItem';
import {
  LessonsTitle,
  LessonsWrap,
  LessonsList,
  LessonsListItem,
} from './Lessons.styled';

const Lessons = ({ lessons, setActiveLessonIdx, activeLessonIdx }) => {
  return (
    <>
      <LessonsTitle>Lessons in this course: {lessons.length}</LessonsTitle>
      <LessonsWrap>
        <LessonsList>
          {lessons.map((lesson, idx) => (
            <LessonsListItem key={lesson.id}>
              <LessonItem
                lesson={lesson}
                idx={idx}
                setActiveLessonIdx={setActiveLessonIdx}
                activeLessonIdx={activeLessonIdx}
              />
            </LessonsListItem>
          ))}
        </LessonsList>
      </LessonsWrap>
    </>
  );
};

export default Lessons;

Lessons.propTypes = {
  lessons: PropTypes.array.isRequired,
  setActiveLessonIdx: PropTypes.func.isRequired,
  activeLessonIdx: PropTypes.number.isRequired,
};
