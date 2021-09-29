import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, fav }) => fav ? theme.colors.secondary : '#fff'};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  h2 {
    cursor: pointer;
  }
  img {
    width: 80%;
    max-height: 15rem;
    border-radius: 5px;
    cursor: pointer;
  }
  button {
    color: #fff;
    background-color: ${({ theme, fav }) => fav ? theme.colors.primary : theme.colors.secondary};
    border-radius: 5px;
    cursor: pointer;
  }

  & > div {
    flex: 1
  }
 
  ul {
    list-style-type: none;
    margin: 0;
  }
  ul li {
    margin-bottom: 20px;
  }
  span {
    font-weight: bold;
  }
  

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
