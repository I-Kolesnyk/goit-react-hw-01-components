import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/random-color';

export const StatisticsSection = styled.section`
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

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
  width: 100%; ;
`;

export const StatListItem = styled.li`
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

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
