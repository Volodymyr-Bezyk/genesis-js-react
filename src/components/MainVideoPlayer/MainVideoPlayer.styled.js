import styled from 'styled-components';

export const VideoWrap = styled.div`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  border-top: 1px solid ${p => p.theme.colors.border};
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

export const PlayerWrap = styled.div`
  position: relative;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  object-fit: cover;

  height: 200px;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    height: 302px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    height: 595px;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    height: 960px;
  }
`;
