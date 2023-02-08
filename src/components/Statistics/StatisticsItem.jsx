import PropTypes from 'prop-types';
import { StatListItem, Label, Percentage } from './Statistics.styled';

export function StatisticsItem({ id, label, percentage }) {
  return (
    <StatListItem key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
