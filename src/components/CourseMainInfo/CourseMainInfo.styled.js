import styled from 'styled-components';

export const RatingWrap = styled.div`
  display: none;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    svg {
      width: ${p => p.theme.iconSizes.s};
      height: ${p => p.theme.iconSizes.s};
      transition: ${p => p.theme.transitions.color};

      :nth-child(-n + ${p => p.stars}) {
        color: rgba(246, 7, 22, 0.7);
      }
    }
  }
`;

export const LessonsTitle = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};
`;
