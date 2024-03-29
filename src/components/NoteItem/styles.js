import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

    &:has(input:focus-visible) {
    outline: 1px solid ${({ theme }) => theme.COLORS.ORANGE};
  }

  > button {
    border: none;
    background: none;
  }
 
  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

 
  > input {
    height: 56px;
    width: 100%;
    
    padding: 12px;
    border-style: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  
`
  