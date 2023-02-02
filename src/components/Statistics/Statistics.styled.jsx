import styled from '@emotion/styled';

const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatisticsItem = styled.li`
&:not(:last-child) {
  margin-bottom: 10px;`;

export { StatisticsList, StatisticsItem };
