import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCourses } from 'redux/courses/operations';
import { selectFilteredCourses } from 'redux/selectors';

import PageWrap from 'components/PageWrap';
import HomeBar from 'components/HomeBar';
import CourseCard from 'components/CourseCard';
import PaginateCourses from 'components/PaginateCourses';
import Error from 'components/Error';
import { selectFilter, selectCoursesError, selectToken } from 'redux/selectors';
import { sortCoursesByDescending } from 'utils/sortCoursesByDescending';

import { CoursesList, CoursesItem } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const courses = useSelector(selectFilteredCourses);
  sortCoursesByDescending(courses);

  const filter = useSelector(selectFilter);
  const error = useSelector(selectCoursesError);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentCourses = courses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(courses.length / 10);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAllCourses({ token, controller }));
    setItemOffset(0);

    return () => {
      controller.abort();
    };
  }, [dispatch, filter, token]);

  const handlePageClick = event => {
    const newOffset = (event.selected * 10) % courses.length;
    setItemOffset(newOffset);
  };

  return (
    <PageWrap>
      {error && <Error message={error.message} />}
      {!error && (
        <>
          <HomeBar />
          <CoursesList>
            {currentCourses.map(course => (
              <CoursesItem key={course.id}>
                <CourseCard course={course} />
              </CoursesItem>
            ))}
          </CoursesList>

          <PaginateCourses
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            itemOffset={itemOffset}
          />
        </>
      )}
    </PageWrap>
  );
};

export default Home;
