import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
