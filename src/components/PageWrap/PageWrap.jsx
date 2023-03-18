import PropTypes from 'prop-types';
import { PageWrapper } from './PageWrap.styled';

const PageWrap = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default PageWrap;
PageWrap.propTypes = {
  children: PropTypes.any.isRequired,
};
