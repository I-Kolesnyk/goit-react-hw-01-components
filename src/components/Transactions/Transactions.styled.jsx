import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding: 20px;
  width: 440px;
  border-radius: ${({ theme }) => {
    return theme.colors.containerBorderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.colors.boxShadow;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.containerBackgroundColor;
  }};
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
  height: 40px;
`;

export const TableHeadCell = styled.th`
  width: calc(100% / 3);
  font-size: 20px;
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
  color: ${({ theme }) => {
    return theme.colors.secondaryTextColor;
  }};
`;

export const TableBody = styled.tbody``;

export const TableRowCell = styled.td`
  width: calc(100% / 3);
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
`;

export const TableRow = styled.tr`
  text-align: center;
  font-size: 18px;
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
  &:nth-of-type(even) {
    background-color: ${({ theme }) => {
      return theme.colors.imageBackgroundColor;
    }};
  }
`;
