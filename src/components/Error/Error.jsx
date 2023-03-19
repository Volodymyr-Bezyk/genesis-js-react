import PropTypes from 'prop-types';
import PageTitle from 'components/PageTitle';
import { ErrorWrap, ErrorText } from './Error.styled';

const Error = ({ message }) => {
  return (
    <ErrorWrap>
      <PageTitle
        title="Whoops, looks like something went wrong. Please relead page or try again
        later"
        color=" rgba(217, 19, 48, 0.8)"
      />

      {message && <ErrorText>{message} </ErrorText>}
    </ErrorWrap>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
