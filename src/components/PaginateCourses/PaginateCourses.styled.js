import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationWrap = styled.div`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    margin: -${p => p.theme.space[1]}px;
    max-width: ${p => p.theme.screens.tablet};
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    max-width: ${p => p.theme.screens.desktop};
  }
  li {
    margin: ${p => p.theme.space[1]}px;
  }
  li a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[2]}px;

    background-color: ${p => p.theme.colors.badge};
    border: 1px solid ${p => p.theme.colors.delimetr};
    border-radius: ${p => p.theme.radii.badge};
    cursor: pointer;
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.title};
    transition: ${p => p.theme.transitions.backgroundColor};

    @media screen and (min-width: ${p => p.theme.screens.tablet}) {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
    }
    @media screen and (min-width: ${p => p.theme.screens.desktop}) {
      font-size: ${p => p.theme.fontSizes[4]}px;
    }
  }
  li.selected a {
    color: ${p => p.theme.colors.primaryIcon};
  }
  li.disable,
  li.disabled a {
    cursor: default;
    background-color: ${p => p.theme.colors.delimetr};
    border: none;
  }
  li:hover:not(.selected):not(.disabled) a {
    background-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.course};
  }
`;
