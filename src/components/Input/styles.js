import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    border-style: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: Roboto, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    border-style: none;
  }
 
    input:focus {
      outline: none;
      /* outline: solid 1px ${({ theme }) => theme.COLORS.ORANGE}; */
      /* border-radius: 10px; */
    }
   

  > svg {
      margin-left: 16px;
    }
`