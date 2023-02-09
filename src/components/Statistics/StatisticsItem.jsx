import PropTypes from 'prop-types';
import { StatListItem, Label, Percentage } from './Statistics.styled';

export function StatisticsItem({ label, percentage }) {
  return (
    <StatListItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
