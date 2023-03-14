import { useState } from 'react';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import SkillsBlockItem from 'components/SkillsBlockItem';

import {
  SkillsBlockWrap,
  SkillsBtn,
  SkillsCloseBtn,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
} from './SkillsBlock.styled';

const SkillsBlock = ({ skills = [], tags = [] }) => {
  const [skillsShown, setSkillsShown] = useState(false);

  return (
    <>
      <SkillsBtn onClick={() => setSkillsShown(true)}>
        <GiSkills />
      </SkillsBtn>

      <SkillsBlockWrap skillsShown={skillsShown}>
        <SkillsCloseBtn onClick={() => setSkillsShown(false)}>
          <AiOutlineClose />
        </SkillsCloseBtn>

        <SkillsTitle>Skills:</SkillsTitle>
        <SkillsList>
          {skills.map(skill => (
            <SkillsListItem key={skill}>
              <SkillsBlockItem text={skill} />
            </SkillsListItem>
          ))}
        </SkillsList>
        <SkillsTitle>Tags:</SkillsTitle>
        <SkillsList>
          {tags.map(tag => (
            <SkillsListItem key={tag}>
              <SkillsBlockItem text={tag} />
            </SkillsListItem>
          ))}
        </SkillsList>
      </SkillsBlockWrap>
    </>
  );
};
export default SkillsBlock;
