import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import './react-datepicker.css';

export const Container = styled.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`;
export const SubContainer = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const SubContainerPE = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`;
export const SubContainerStats = styled.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const BlockTitleCall = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    margin-bottom: 32px;
  }
`;
export const BlockCalendar = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px 20px;
  }
`;
export const CustomDatePicker = styled(DatePicker)`
  @media screen and (min-width: 375px) {
    width: 100px;

    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 111.111%;

    background-color: transparent;
    border: none;
    color: var(--primary-text-color);

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    width: 131px;

    font-size: 24px;
    line-height: 133.333%;
  }
`;
export const BlockBtnDate = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const BtnLeft = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 6px;
  }
`;
export const BtnRight = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 375px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 116.667%;

    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137.5%;
  }
`;

// *****Products Conrainer*****

export const ProductsContainer = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    min-height: 335px;
    max-height: 824px;

    overflow-y: auto;

    padding: 13px;
    align-items: flex-start;

    margin-bottom: 40px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    padding: 16px;
    // justify-content: center;
  }
`;
export const ContainerProductInput = styled.div`
  @media screen and (min-width: 1440px) {
  }
`;
export const BlockProductInput = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    justify-content: center;
    margin-left: 16px;
  }
`;
export const LabelProduct = styled.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);
  }

  @media screen and (min-width: 768px) {
    &.label-prod-0,
    &.label-prod-1,
    &.label-prod-2,
    &.label-prod-3,
    &.label-prod-4 {
      display: none;
    }
  }
`;
export const InputProduct = styled.input`
  @media screen and (min-width: 375px) {
    display: flex;
    height: 38px;
    padding: 10px 14px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--primary-text-color);

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid var(--secondary-text-color);

    &:focus {
      outline: none;
    }

    &.input-prod-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-prod-2 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-prod-3 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-prod-4 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-prod-0 {
      width: 204px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-1 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-prod-2 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-3 {
      width: 90px;
      margin-right: 8px;
    }

    &.input-prod-4 {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.input-prod-0 {
      width: 212px;
    }

    &.input-prod-1 {
      width: 166px;
    }

    &.input-prod-2 {
      width: 105px;
    }

    &.input-prod-3 {
      width: 105px;
    }

    &.input-prod-4 {
      width: 110px;
    }
  }
`;
export const BlockNotFoundProd = styled.p`
  @media screen and (min-width: 375px) {
    position: absolute;
    top: 159px;
    left: 107px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    top: 105px;
    left: 282px;
  }

  @media screen and (min-width: 1440px) {
    top: 105px;
    left: 344px;

    font-size: 16px;
    line-height: 150%;
  }
`;
export const ButtonDelProd = styled.button`
  @media screen and (min-width: 375px) {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    right: -35px;
    bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    right: -42px;
  }
`;

// *****Exercises Conrainer*****

export const ExercisesContainer = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 335px;

    overflow-y: auto;

    min-height: 335px;
    max-height: 824px;

    padding: 13px;
    align-items: flex-start;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 234px;
    max-height: 234px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    padding: 16px;
  }
`;
export const ContainerExecrcisesInput = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;
export const BlockExecrcisesInput = styled.div`
  @media screen and (min-width: 375px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
export const LabelExecrcises = styled.label`
  @media screen and (min-width: 375px) {
    display: block;
    margin-bottom: 8px;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.label-exe-4 {
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

   @media screen and (min-width: 768px) {
    &.label-exe-0,
    &.label-exe-1,
    &.label-exe-2,
    &.label-exe-3,
    &.label-exe-4,
    &.label-exe-5 {
      display: none;
    }
`;
export const InputExecrcises = styled.input`
  @media screen and (min-width: 375px) {
    display: flex;
    padding: 10px 14px;
    height: 38px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--primary-text-color);

    background-color: transparent;
    border-radius: 12px;
    border: 1px solid var(--secondary-text-color);

    &:focus {
      outline: none;
    }

    &.input-exe-0 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-1 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-2 {
      width: 297px;
      margin-bottom: 16px;
    }

    &.input-exe-3 {
      width: 81px;
      margin-right: 16px;
    }

    &.input-exe-4 {
      width: 80px;
      margin-right: 16px;
    }

    &.input-exe-5 {
      width: 76px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    padding: 8px 14px;

    font-size: 16px;
    line-height: 150%;

    &.input-exe-0 {
      width: 90px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-1 {
      width: 132px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-2 {
      width: 128px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    &.input-exe-3 {
      width: 84px;
      margin-right: 8px;
    }

    &.input-exe-4 {
      width: 78px;
      margin-right: 8px;
    }

    &.input-exe-5 {
      width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.input-exe-0 {
      width: 115px;
    }

    &.input-exe-1 {
      width: 157px;
    }

    &.input-exe-2 {
      width: 131px;
    }

    &.input-exe-3 {
      width: 106px;
    }

    &.input-exe-4 {
      width: 91px;
    }

    &.input-exe-5 {
      width: 82px;
    }
  }
`;
export const BlockNotFoundExe = styled.p`
  @media screen and (min-width: 375px) {
    position: absolute;
    top: 159px;
    left: 107px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    top: 105px;
    left: 282px;
  }

  @media screen and (min-width: 1440px) {
    top: 105px;
    left: 342px;

    font-size: 16px;
    line-height: 150%;
  }
`;
export const ButtonDelExe = styled.button`
  @media screen and (min-width: 375px) {
    position: absolute;
    right: 0;
    bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    right: -35px;
    bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    right: -45px;
  }
`;

// *****Label and Button*****

export const BlockTxtBtn = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    gap: 145px;
    margin-bottom: 48px;

    &.block-ex {
      gap: 131px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 503px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 495px;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    gap: 624px;
    margin-bottom: 42px;

    &.block-ex {
      gap: 615px;
    }
  }
`;
export const BlockProdLabel768 = styled.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const TitleProdLabel768 = styled.p`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-prod-0 {
      left: 13px;
    }
    &.title-prod-1 {
      left: 225px;
    }
    &.title-prod-2 {
      left: 361px;
    }
    &.title-prod-3 {
      left: 459px;
    }
    &.title-prod-4 {
      left: 557px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-prod-0 {
      left: 32px;
    }
    &.title-prod-1 {
      left: 252px;
    }
    &.title-prod-2 {
      left: 426px;
    }
    &.title-prod-3 {
      left: 539px;
    }
    &.title-prod-4 {
      left: 652px;
    }
  }
`;
export const BlockExeLabel768 = styled.div`
  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const TitleExeLabel768 = styled.p`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    color: var(--light-accent-color);

    &.title-exe-0 {
      left: 13px;
    }
    &.title-exe-1 {
      left: 111px;
    }
    &.title-exe-2 {
      left: 251px;
    }
    &.title-exe-3 {
      left: 388px;
    }
    &.title-exe-4 {
      width: 78px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      left: 479px;
    }
    &.title-exe-5 {
      left: 565px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.title-exe-0 {
      left: 32px;
    }
    &.title-exe-1 {
      left: 155px;
    }
    &.title-exe-2 {
      left: 320px;
    }
    &.title-exe-3 {
      left: 459px;
    }
    &.title-exe-4 {
      width: 85px;
      left: 573px;
    }
    &.title-exe-5 {
      left: 672px;
    }
  }
`;
export const ProductsExercisesText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;

  color: rgba(239, 237, 232, 0.5);
`;
export const ProductsBtn = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 101px;
    padding: 0;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.571%;
    color: var(--bright-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 112px;

    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  }
`;
export const ExercisesBtn = styled.button`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 105px;
    padding: 0;
    gap: 8px;
    align-items: center;

    background-color: transparent;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 128.571%;
    color: var(--bright-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 117px;

    font-size: 16px;
    line-height: 150%;
  }
`;

// *****Sector Total*****

export const ListStats = styled.ul`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 340px;
    gap: 20px 13px;
    align-content: flex-start;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 248px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    height: 380px;
  }
`;
export const ItemStats = styled.li`
  @media screen and (min-width: 375px) {
    display: flex;
    width: 157px;
    height: 96px;
    padding: 12px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background-color: rgba(239, 237, 232, 0.05);

    &:nth-of-type(even) {
      width: 165px;
    }

    &:nth-child(5) {
      height: 108px;
    }

    &:nth-child(6) {
      height: 108px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;

    &:nth-of-type(even) {
      width: 187px;
    }

    &:nth-child(5) {
      height: 116px;
    }

    &:nth-child(6) {
      height: 116px;
    }
  }
`;
export const ItemContent = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;

    &.last-item {
      gap: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    &.last-item {
      gap: 28px;
    }
  }
`;
export const TextContent = styled.p`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;

    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;

    color: rgba(239, 237, 232, 0.4);

    &.last-text {
      line-height: 150%;
    }
  }

  @media screen and (min-width: 768px) {
    line-height: 150%;
  }
`;
export const TotalContent = styled.p`
  @media screen and (min-width: 375px) {
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 111.111%;

    color: var(--primary-text-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;
export const BlockWarning = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
export const TextWarning = styled.p`
  @media screen and (min-width: 375px) {
    width: 303px;

    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 128.571%;

    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    width: 561px;

    font-size: 16px;
    line-height: 150%;
  }

  @media screen and (min-width: 1440px) {
    width: 358px;
  }
`;

// *****SVG-style*****

export const SvgIconCalendar = styled.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const SvgIconLeft = styled.svg`
  @media screen and (min-width: 375px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const SvgIconDel = styled.svg`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;
