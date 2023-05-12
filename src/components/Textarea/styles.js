import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;
  outline: none;
  
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 10px;


  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    font-family: Roboto, sans-serif;
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
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  *::-webkit-scrollbar-thumb {
    background-color: #FF9000;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
  `