import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';
import DashboardText from 'components/DashboardText';
import DashboardFeatures from 'components/DashboardFeatures';
import DashboardGraph from 'components/DashboardGraph/DashboardGraph';

import { DashboardWrap } from './DashBoard.styled';

const DashBoard = () => {
  return (
    <PageWrap>
      <PageTitle title="Dashboard" />
      <DashboardWrap>
        <DashboardText />
        <DashboardFeatures />
        <DashboardGraph />
      </DashboardWrap>
    </PageWrap>
  );
};

export default DashBoard;
