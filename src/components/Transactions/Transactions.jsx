import PropTypes from 'prop-types';
import { TransactionItem } from '../Transactions/TransactionItem';
import {
  TransactionsTable,
  TableHead,
  TableHeadCell,
} from './Transactions.styled';

export function Transactions({ transactions }) {
  return (
    <TransactionsTable>
      <TableHead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionsTable>
  );
}

Transactions.propType = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
