import styled from 'styled-components';

export const DashboardTitle = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  max-width: calc(100% - 35px);
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;
export const DashboardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.badge};
  border-radius: ${p => p.theme.radii.badge};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 80%;
    justify-content: space-between;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 50%;
    justify-content: space-between;
  }

  @media (min-width: ${p => p.theme.screens.large}) {
    width: 30%;
    justify-content: space-between;
  }
`;

export const DashboardItem = styled.li`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;

  :first-child {
    border-right: 1px solid ${p => p.theme.colors.delimetr};
  }
  :last-child {
    border-left: 1px solid ${p => p.theme.colors.delimetr};
  }
`;
export const DashboardValue = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.title};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[6]}px;
  }
`;
export const DashboardDesc = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.primaryLink};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;
