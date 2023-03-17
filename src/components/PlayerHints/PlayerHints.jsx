import { Hint, HintsWrap, HintTitle, HintText } from './PlayerHints.styled';

const PlayerHints = () => {
  return (
    <HintsWrap>
      <Hint>
        <HintTitle>Slower?</HintTitle>
        <HintText>Press - on keyboard</HintText>
      </Hint>
      <Hint>
        <HintTitle>Faster?</HintTitle>
        <HintText>Press + on keyboard</HintText>
      </Hint>
    </HintsWrap>
  );
};

export default PlayerHints;
