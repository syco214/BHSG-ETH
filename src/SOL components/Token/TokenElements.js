import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 480px) {
    margin-top: -150px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minimax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col2 col2' 'col1 col1'`)}
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 800px;
`;
export const TopLine = styled.p`
  color: white;
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-right: 30px;
  text-align: left;
  text-shadow: 0 0 0.3em hsl(195 50% 50%);
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 640px) {
    font-size: 28px;
    max-width: 300px;
  }

  @media screen and (max-width: 560px) {
    font-size: 28px;
    text-align: center;
    max-width: 500px;
    padding-right: 0px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  font-family: "Saira", sans-serif;
  font-weight: 300;
  text-align: justify;

  @media screen and (max-width: 640px) {
    font-size: 16px;
    max-width: 350px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 500px;
  }
`;

export const BtnWrap = styled.div`
  display: grid;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFE81F' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    margin-left: 10px;
    margin-right: 10px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '16px' : '12px')};
    outline: none;
    max-width: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-family: 'Saira', sans-serif;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#FFE81F')};
    }
`;