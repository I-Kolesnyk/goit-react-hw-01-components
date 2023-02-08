import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.backgroundColor;
  }};
`;
