import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #FF9000 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 13px;
    
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #FF9000;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
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