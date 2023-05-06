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
  padding: 64px 64px 0;

  `

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: scroll;
  `

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
