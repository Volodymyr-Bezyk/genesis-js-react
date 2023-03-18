import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import SkillsBlockItem from 'components/SkillsBlockItem';

import {
  AddInfoBtn,
  AddInfoBlockWrap,
  AddInfoCloseBtn,
  AddInfoTitle,
  AddInfoList,
  AddInfoItem,
} from './SkillsBlock.styled';

const SkillsBlock = ({ skills = [], tags = [] }) => {
  const [skillsShown, setSkillsShown] = useState(false);

  return (
    <>
      <AddInfoBtn onClick={() => setSkillsShown(true)}>
        <GiSkills />
      </AddInfoBtn>

      <AddInfoBlockWrap skillsShown={skillsShown}>
        <AddInfoCloseBtn onClick={() => setSkillsShown(false)}>
          <AiOutlineClose />
        </AddInfoCloseBtn>

        <AddInfoTitle>Skills:</AddInfoTitle>
        <AddInfoList>
          {skills.map(skill => (
            <AddInfoItem key={skill}>
              <SkillsBlockItem text={skill} />
            </AddInfoItem>
          ))}
        </AddInfoList>
        <AddInfoTitle>Tags:</AddInfoTitle>
        <AddInfoList>
          {tags.map(tag => (
            <AddInfoItem key={tag}>
              <SkillsBlockItem text={tag} />
            </AddInfoItem>
          ))}
        </AddInfoList>
      </AddInfoBlockWrap>
    </>
  );
};
export default SkillsBlock;

SkillsBlock.propTypes = {
  skill: PropTypes.string,
  tags: PropTypes.array,
  skills: PropTypes.array,
};
