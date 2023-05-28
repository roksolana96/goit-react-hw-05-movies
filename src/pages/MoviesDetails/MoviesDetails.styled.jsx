import styled from 'styled-components';

export const FilmInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const FilmImg = styled.img`
  display: block;
  margin-right: 25px;
`;

export const ButtonGoBack = styled.button`
  display: inline-block;
  background-color: #aaa5dd;
  width: 100px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;