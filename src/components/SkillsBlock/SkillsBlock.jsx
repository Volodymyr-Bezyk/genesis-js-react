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

const SkillsBlock = () => {
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
          <SkillsListItem>
            <SkillsBlockItem text="Aligning your goals with your motives" />
          </SkillsListItem>
          <SkillsListItem>
            <SkillsBlockItem text="Overcoming decision paralysis" />
          </SkillsListItem>
          <SkillsListItem>
            <SkillsBlockItem text="Reframing negative self-talk" />
          </SkillsListItem>
        </SkillsList>
      </SkillsBlockWrap>
    </>
  );
};
export default SkillsBlock;
