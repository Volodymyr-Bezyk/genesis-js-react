import firstGrapg from '../../img/1.jpg';
import secondGrapg from '../../img/2.jpg';
import thirdGrapg from '../../img/3.jpg';
import { GraphList, GraphItem, GraphImg } from './DashboardGraph.styled';

const DashboardGraph = () => {
  return (
    <GraphList>
      <GraphItem>
        <GraphImg src={firstGrapg} alt="first graph" />
      </GraphItem>
      <GraphItem>
        <GraphImg src={secondGrapg} alt="second graph" />
      </GraphItem>
      <GraphItem>
        <GraphImg src={thirdGrapg} alt="third graph" />
      </GraphItem>
    </GraphList>
  );
};

export default DashboardGraph;
