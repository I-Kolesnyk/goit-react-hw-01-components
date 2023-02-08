import PropTypes from 'prop-types';
import { TableRowCell, TableRow } from './Transactions.styled';

export function TransactionItem({ id, type, amount, currency }) {
  return (
    <TableRow key={id}>
      <TableRowCell>{type}</TableRowCell>
      <TableRowCell>{amount}</TableRowCell>
      <TableRowCell>{currency}</TableRowCell>
    </TableRow>
  );
}

TransactionItem.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
