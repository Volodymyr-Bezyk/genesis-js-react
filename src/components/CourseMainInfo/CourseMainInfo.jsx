import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';
import { dateFormatter } from 'utils/dateFormatter';

import Box from 'components/Box';
import PageTitle from 'components/PageTitle';
import { RatingWrap, LessonsTitle } from './CourseMainInfo.styled';

const CourseMainInfo = ({ title, launchDate, rating }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <PageTitle title={title} />
      <RatingWrap stars={Math.round(rating)}>
        <LessonsTitle>Rating:</LessonsTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Box>
      </RatingWrap>
      <LessonsTitle>Added: {dateFormatter(launchDate)}</LessonsTitle>
    </Box>
  );
};
export default CourseMainInfo;

CourseMainInfo.propTypes = {
  title: PropTypes.string,
  launchDate: PropTypes.string,
  rating: PropTypes.number,
};
