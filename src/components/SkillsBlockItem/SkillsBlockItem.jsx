import PropTypes from 'prop-types';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { SkillsListText } from './SkillsBlockItem.styled';

const SkillsBlockItem = ({ text }) => {
  return (
    <>
      <VscDebugBreakpointData />
      <SkillsListText>{text}</SkillsListText>
    </>
  );
};

export default SkillsBlockItem;

SkillsBlockItem.propTypes = {
  text: PropTypes.string,
};
