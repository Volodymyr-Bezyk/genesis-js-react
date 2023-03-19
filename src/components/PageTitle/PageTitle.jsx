import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

const PageTitle = ({ title, color }) => {
  return <Title color={color}>{title}</Title>;
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};
