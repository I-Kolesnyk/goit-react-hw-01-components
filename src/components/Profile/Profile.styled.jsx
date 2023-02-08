import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/random-color';

export const ProfileContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 400px;
  background-color: ${({ theme }) => {
    return theme.colors.containerBackgroundColor;
  }};
  border-radius: ${({ theme }) => {
    return theme.colors.containerBorderRadius;
  }};
  box-shadow: ${({ theme }) => {
    return theme.colors.boxShadow;
  }};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 40px;
  background-color: ${({ theme }) => {
    return theme.colors.imageBackgroundColor;
  }};
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  font-size: 20px;
`;

export const UserLocation = styled.p`
  font-size: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${getRandomHexColor};
  border-radius: ${({ theme }) => {
    return theme.colors.elementBorderRadius;
  }};
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
