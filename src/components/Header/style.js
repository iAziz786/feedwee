import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 53px;
`;

export const FixWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
`;

export const ResponsiveItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Navbar = styled.div`
  position: relative;
  display: flex !important;
  width: 100%;
  justify-content: space-around;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  height: 53px;
  align-items: center;
  @media (max-width: 992px) {
    order: 1;
    flex: 0 0 auto;
    max-width: 100%;
    justify-content: space-evenly;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  height: 53px;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`;
