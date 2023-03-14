import Box from 'components/Box';
import { PaginationWrap, Pagination } from './PaginateCourses.styled';

const PaginateCourse = ({ handlePageClick, pageCount }) => {
  return (
    <Box display="flex" justifyContent="center">
      <PaginationWrap>
        <Pagination
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
        />
      </PaginationWrap>
    </Box>
  );
};

export default PaginateCourse;
