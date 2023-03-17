import {
  DashboardTitle,
  DashboardList,
  DashboardItem,
  DashboardDesc,
  DashboardValue,
} from './DashboardFeatures.styled';

const DashboardFeatures = () => {
  return (
    <>
      <DashboardTitle>Only on this study platform</DashboardTitle>
      <DashboardList>
        <DashboardItem>
          <DashboardDesc>More </DashboardDesc>
          <DashboardValue>10 000 </DashboardValue>
          <DashboardDesc>Lessons</DashboardDesc>
        </DashboardItem>
        <DashboardItem>
          <DashboardDesc>Average </DashboardDesc>
          <DashboardValue>4.8</DashboardValue>
          <DashboardDesc>Rating</DashboardDesc>
        </DashboardItem>
        <DashboardItem>
          <DashboardDesc>Best </DashboardDesc>
          <DashboardValue>6 000</DashboardValue>
          <DashboardDesc>Hours</DashboardDesc>
        </DashboardItem>
      </DashboardList>
    </>
  );
};

export default DashboardFeatures;
