import PropTypes from 'prop-types';
import { TableRowCell, TableRow } from './Transactions.styled';

export function TransactionItem({ type, amount, currency }) {
  return (
    <TableRow>
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
