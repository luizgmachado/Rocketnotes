import styled from "styled-components";
import backgroundImg from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 100vh;
  
  
  display: flex;
  align-items: stretch;

  `

export const Form = styled.form`
  padding: 0 136px;
  margin-bottom: 124px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 48px;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    margin-top: 124px;
  }

  
  `

  export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
  `