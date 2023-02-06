import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <>{title && <h2 class="title">{title}</h2>}</>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
