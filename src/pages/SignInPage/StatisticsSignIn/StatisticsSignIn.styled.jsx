import styled from '@emotion/styled';

export const StatisticsBox = styled.div`
  position: absolute;
  left: 30%;
  top: 200%;
  @media screen and (min-width: 768px) {
    left: 40%;
    top: 130%;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    top: 65%;
  }
`;

export const VideoBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  width: 146px;
  height: 66px;
  background: #303030;

  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 206px;
    height: 96px;
    background: #303030;
  }
`;

export const VideoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #ef8964;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const VideoIcon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const VideoText = styled.p`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 8px;
  }
`;

export const VideoTutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

// !
export const CaloriesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 8px;
  border-radius: 12px;
  background: #ef8964;
  width: 119px;
  height: 76px;
  padding-left: 18px;
  margin-top: 70px;
  margin-left: 115px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    border-radius: 12px;
    background: #ef8964;
    width: 180px;
    height: 110px;
    padding-left: 32px;
    margin-top: 56px;
    margin-left: 223px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 39px;
    margin-left: 458px;
  }
`;

export const CaloriesBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #efa082;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const RunIcon = styled.svg`
  fill: rgba(239, 237, 232, 1);
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CaloriesText = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(50 / 48);
    letter-spacing: -1px;
  }
`;

export const CaloriesTutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CaloriesContent = styled.div`
  gap: 8px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`;
