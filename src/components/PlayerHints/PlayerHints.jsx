import {
  Hint,
  HintsWrap,
  HintTitle,
  HintText,
  PipBtn,
} from './PlayerHints.styled';

const PlayerHints = ({ videoRef }) => {
  const enablePiPBtn =
    videoRef.current !== null && document.pictureInPictureEnabled;

  const handlePiP = e => {
    if (!document.pictureInPictureElement) {
      videoRef.current.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
  };

  return (
    <HintsWrap>
      <Hint>
        <HintTitle>Slower?</HintTitle>
        <HintText>Press - on keyboard</HintText>
      </Hint>
      <PipBtn type="button" onClick={handlePiP} disabled={!enablePiPBtn}>
        Play picture-in-picture
      </PipBtn>
      <Hint>
        <HintTitle>Faster?</HintTitle>
        <HintText>Press + on keyboard</HintText>
      </Hint>
    </HintsWrap>
  );
};

export default PlayerHints;
