import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  width: 440px;
  border-radius: ${({ theme }) => {
    return theme.colors.containerBorderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.colors.boxShadow;
  }};
`;

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;
  width: 400px;
  padding: 20px;
  background-color: ${({ theme }) => {
    return theme.colors.containerBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ children }) => {
    return children ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
  background-color: ${({ theme }) => {
    return theme.colors.imageBackgroundColor;
  }};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
