import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  `

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  
`

export const Menu = styled.ul`
  grid-area: menu;

  padding: 64px;
  text-align: center;
  list-style: none;

  > li {
    margin-bottom: 32px;
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  `

export const Search = styled.div`
  grid-area: search;
  `

export const Content = styled.div`
  grid-area: content;`

export const NewNote = styled.button`
  grid-area: newnote;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  `
