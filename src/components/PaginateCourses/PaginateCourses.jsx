import PropTypes from 'prop-types';
import Box from 'components/Box';
import { PaginationWrap, Pagination } from './PaginateCourses.styled';

const PaginateCourse = ({ handlePageClick, pageCount, itemOffset }) => {
  return (
    <Box display="flex" justifyContent="center">
      {pageCount > 1 && (
        <PaginationWrap>
          <Pagination
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
            forcePage={itemOffset === 0 ? itemOffset : itemOffset / 10}
          />
        </PaginationWrap>
      )}
    </Box>
  );
};

export default PaginateCourse;

PaginateCourse.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  itemOffset: PropTypes.number.isRequired,
};
