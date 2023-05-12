import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
`

export const Form = styled.form`
  width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
      line-height: 26px;
    }
  }
`