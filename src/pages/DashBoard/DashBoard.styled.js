import styled from 'styled-components';

export const DashboardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.badge};
`;
